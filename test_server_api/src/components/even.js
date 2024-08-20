import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchEven = () => {
  const [even, setEven] = useState([]);

  useEffect(() => {
    axios.get('http://20.244.56.144/test/even')
      .then(response => {
        setEven(response.data.numbers);
      })
      .catch(error => {
        console.error('Error fetching even numbers:', error);
      });
  }, []);

  return (
    <div>
      <h2>Even Numbers</h2>
      <ul>
        {even.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchEven;
