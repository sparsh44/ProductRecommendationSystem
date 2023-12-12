

// [userId].js
import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Recommend } from '@/components/Recommend';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Recomd() {
  const router = useRouter();
  const [dataArr, setDataArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserValid, setIsUserVaid] = useState(0);
  
  const userId = router.query.userId;

  const handleSearch = (query) => {
    // Update the search query state
    setSearchQuery(query);

    // Perform your search based on the query
    // You can make a request to your API here
    console.log(searchQuery)

    const response = axios
      .post('http://127.0.0.1:5000/', {
        data: {
          userId : userId,
          searchQuery : searchQuery
        },
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(res => {
        console.log(res)
        setDataArr(res.data[0])
        setIsUserVaid(res.data[1])
      })
  };

  return (
    <div>
      {dataArr.length>0 ? (
        <div>
          <Navbar onSearch={handleSearch}/>
          {isUserValid == 1?(
            <div className="bg-blue-200 text-Black p-4 rounded shadow-lg flex items-center justify-center text-lg font-bold">User Is Valid ,Fetching Products with ratings </div>
              ):(
              <div className="bg-blue-200 text-Black p-4 rounded shadow-lg flex items-center justify-center text-lg font-bold">User Is not valid ,Fetching Products as cold start </div>
          )}
          <div>
            <Recommend array={dataArr} userValid = {isUserValid}/>
          </div>
        </div>
      ) : (
        <div>
          <Navbar onSearch={handleSearch} />
      </div>
       )}
    </div>
  );
}
