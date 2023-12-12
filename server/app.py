from tensorflow.keras.models import load_model
from flask import Flask, request, jsonify, json
from flask_cors import CORS,cross_origin
import pandas as pd
import numpy as np
import pickle
from sklearn.preprocessing import LabelEncoder
import joblib
import faiss
from sentence_transformers import SentenceTransformer, util




app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

#Load same label encoder as used in model
user_label_encoder = joblib.load('../model/user_encoder.pkl')
product_label_encoder = joblib.load('../model/product_encoder.pkl')

#Load User Model
user_model = load_model("../model/nnModel.h5")

# Load the index model
index = faiss.read_index("../model/faiss_index.index")

#Embeddings from tokenizer
class Tokenizer(object):
    def __init__(self):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')

    def get_token(self, documents):
        sentences  = [documents]
        sentence_embeddings = self.model.encode(sentences)
        _ = list(sentence_embeddings.flatten())
        encod_np_array = np.array(_)
        encod_list = encod_np_array.tolist()
        return encod_list

helper_token = Tokenizer()


#Load Products inventory Dataframe
df = pd.read_csv("../model/productInformations.csv")


#Load Users that will get User based Collaborative filtering Recommendations , else Cold Start
with open('../model/user_map.json', 'r') as json_file:
    shortlistedUsersForRecommendations = json.load(json_file)

with open('../model/prod_map.json', 'r') as json_file:
    shortlistedProductForRating = json.load(json_file)





def getPredictedRatingFromUserModel(userId, productId):
    encoded_user_id = user_label_encoder.transform([userId])[0]
    encoded_product_id = product_label_encoder.transform([productId])[0]

    # Create a DataFrame with the encoded IDs
    input_data = pd.DataFrame({
        'labelEncodedUserId': [encoded_user_id],
        'labelEncodedProductId': [encoded_product_id]
    })
    print(encoded_user_id)
    print(encoded_product_id)

    # Make predictions using the loaded model
    predicted_rating = user_model.predict([input_data.labelEncodedUserId, input_data.labelEncodedProductId])
    return str(predicted_rating[0][0])







def getRecommendationsFromQuery(query, df, top_n=200):
    #returns [[productId, Title, Description, Distance]]
    query_embedding = helper_token.get_token(query) 

    # Perform a similarity search
    k = top_n * 10  # Fetch more results initially
    distances, indices = index.search(np.array([query_embedding]), k)

    # Get top_n recommendations
    top_indices = indices[0][:top_n]
    top_distances = distances[0][:top_n]

    # Get recommendations from the DataFrame using the indices
    recommendations = df[['asin', 'title', 'description']].iloc[top_indices]
    recommendations['distances'] = top_distances
    recommendations = recommendations.values.tolist()
    return recommendations







def getFinalRecommendations(userId, query):
    queryRec = getRecommendationsFromQuery(query, df)
    #return [[productId, Title, Description, Distance/PredictedRating]]
    finalRecommendations = []
    if userId in shortlistedUsersForRecommendations :
        for i in range(len(queryRec)):
            productId = queryRec[i][0]
            if productId not in shortlistedProductForRating :
                continue
            predictedRating = getPredictedRatingFromUserModel(userId,productId)
            finalRecommendations.append([productId, queryRec[i][1], queryRec[i][2], predictedRating])

        finalRecommendations = sorted(finalRecommendations, key=lambda x: x[3], reverse=True)
        print("helo")
        return [finalRecommendations, 1]
    else:
        return [queryRec,0]

        



@app.route('/',  methods = ['GET', 'POST'])
def main():
    userId = request.json['data']['userId']
    searchQuery = request.json['data']['searchQuery']

    results = getFinalRecommendations(userId, searchQuery)
    #search query also recieved
    print(userId)
    print(searchQuery)
    return results

if __name__=='__main__':  
    print("Server Running")
    # getRecommendationsFromQuery("Nail Polish remover", df)
    # print(getPredictedRatingFromUserModel("A3H0SYE1UMSQNM", "B00009W3I4"))
    # print(getFinalRecommendations("A3H0SYE1UMSQNM", "Hair Dryer"))
    app.run(debug=True, port ='5000')