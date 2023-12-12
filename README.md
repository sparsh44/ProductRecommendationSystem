# Product Recommendation System For E-Commerce Websites

## Solution Proposed
1.)In the proposed work, we employed a comprehensive set of algorithms to capture and analyze user
behavior on the website. Utilizing a User-Item Interaction Matrix, KNN, KNN with sparse row matrix,
SVD, and deep neural networks using TensorFlow Keras, we created a robust foundation for
understanding user preferences and identifying patterns in their interactions, contributing to the
development of personalized recommendation algorithms.   

2.)The Personalized Recommendation Algorithms were further enhanced with the implementation of
Neural Collaborative Filtering (NCF). This sophisticated approach combines neural networks with
collaborative filtering techniques, excelling in capturing intricate user-item interactions. By
integrating NCF, we aimed to provide more accurate and personalized product recommendations
based on user behavior data.   

3.)To tackle the Cold-Start Problem, particularly with new users or products lacking sufficient historical
data, we implemented content-based recommendations. This strategy leverages product
characteristics and user preferences to make initial suggestions, ensuring a more inclusive
recommendation system from the outset.  

4.)For Rating Prediction, machine learning and artificial intelligence techniques were employed. Models
were trained on historical data using algorithms like User-Item Interaction Matrix, KNN, and deep
neural networks with TensorFlow-Keras to predict user ratings accurately, even for unrated items.   

5.)The implementation of Search Functionality incorporated Natural Language Processing (NLP)
techniques. We utilized BERT embeddings to convert product text into vectors, enabling a similarity
search that returns results related to the user's query. This enhances user engagement and satisfaction
by allowing users to explicitly express their preferences through search.   

5.)Addressing Scalability concerns, we designed the recommendation system with efficiency in mind.
Leveraging distributed computing, parallel processing, and the FAISS library for similarity search,
we achieved minimal search times for user queries. This ensures optimal performance as the user base
and dataset size grow, maintaining a responsive and reliable system under increasing loads.   

6.)While maintaining the existing UI/UX, we emphasized enhancing the user interface and experience.
This involves implementing intuitive navigation, visually appealing design, and interactive elements
to encourage user interaction. A well-designed UI/UX contributes significantly to user engagement
and satisfaction, complementing the advanced recommendation algorithms and features implemented
in the system.   


## Tech Stack Used
- **AI**: TensorFlow,Surprise,FAISS and BERT libraries for creating ML models.
- **Server**: Flask backend.
- **Frontend**: Next.js and Tailwind CSS frontend.

## Run Commands
To run the project locally:

1. Clone the repository:

```terminal
git clone https://github.com/sparsh44/ProductRecommendationSystem.git
```
- Navigate to project directory.
```terminal
cd ProductRecommendationSystem
```

2. Install dependencies for the client (Next.js):

```terminal
cd client
npm install
```


3. Start the Next.js development server:

```terminal
npm run dev
```

4. Download the "model" folder according to instructions mentioned in existing model folder.

5. <b>Install all the missing modules using pip </b> and Start the Flask backend server.
   
```terminal
cd server
python app.py
 ```


