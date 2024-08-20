

import React from 'react';
import FetchPrimes from './prime';
import FetchFibonacci from './fibonacci';
import FetchEven from './even';
import FetchRandom from './random';

function App() {
  return (
    <div className="App">
      <h1>Number APIs</h1>
      <FetchPrimes />
      <FetchFibonacci />
      <FetchEven />
      <FetchRandom />
    </div>
  );
}

export default App;
