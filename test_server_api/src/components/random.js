import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchRandom = () => {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    axios.get('http://20.244.56.144/test/rand')
      .then(response => {
        setRandom(response.data.numbers);
      })
      .catch(error => {
        console.error('Error fetching random numbers:', error);
      });
  }, []);

  return (
    <div>
      <h2>Random Numbers</h2>
      <ul>
        {random.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchRandom;
