import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchPrimes = () => {
  const [primes, setPrimes] = useState([]);

  useEffect(() => {
    axios.get('http://20.244.56.144/test/primes')
      .then(response => {
        setPrimes(response.data.numbers);
      })
      .catch(error => {
        console.error('Error fetching prime numbers:', error);
      });
  }, []);

  return (
    <div>
      <h2>Prime Numbers</h2>
      <ul>
        {primes.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchPrimes;
