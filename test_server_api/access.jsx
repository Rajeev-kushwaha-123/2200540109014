import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchDataWithAuth = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken');  // or use state if stored in state

      try {
        const response = await axios.get('http://20.244.56.144/your-api-endpoint', {
          headers: {
            Authorization: `Bearer ${token}`,  // Add the token here
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data with Auth</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default FetchDataWithAuth;
