import Prime from './components/prime';  // if prime.js is inside a components folder
import Fibonacci from './components/fibonacci';
import Even from './components/even';
import Random from './components/random';


function App() {
  return (
    <div className="App">
      <h1>Number APIs</h1>
      <Prime />
      < Fibonacci/>
      <Even />
      <Random />
    </div>
  );
}

export default App;
