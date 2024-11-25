import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'; // This assumes you are using the default Vite logo.
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>Edit <code>src/App.jsx</code> and save to test HMR.</p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more.
        </p>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Tailwind CSS</h1>
      <p className="text-lg text-gray-700 mt-4">
        Tailwind CSS is successfully integrated!
      </p>
    </div>
    </div>
  );
}
export default App
