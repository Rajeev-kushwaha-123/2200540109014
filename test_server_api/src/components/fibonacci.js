import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchFibonacci = () => {
  const [fibo, setFibo] = useState([]);

  useEffect(() => {
    axios.get('http://20.244.56.144/test/fibo')
      .then(response => {
        setFibo(response.data.numbers);
      })
      .catch(error => {
        console.error('Error fetching fibonacci numbers:', error);
      });
  }, []);

  return (
    <div>
      <h2>Fibonacci Numbers</h2>
      <ul>
        {fibo.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchFibonacci;
