import { useState } from 'react';

const Counter = () => {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter >= 100) {
      alert("Counter cannot be more than 20");
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      alert("Counter cannot be less than 0");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div 
  className="bg-[url('https://img.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background_1253-1584.jpg?t=st=1742406635~exp=1742410235~hmac=449e321a692176f8273adde88bd518d5cbbed1267bc1a2d674c5c14ed79bfe2a&w=1060')] bg-cover bg-center w-full h-screen flex items-center justify-center">

  <div className="text-center p-4 bg-gray-800 text-white rounded-lg shadow-md w-80">
      <h1 className="text-2xl mb-4">Counter</h1>
      <h2 className="text-xl mb-4">Count: {counter}</h2>
      <button 
        onClick={addValue} 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Increment
      </button>
      <button 
        onClick={removeValue} 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrement
      </button>
    </div>
    </div>
  );
};

export default Counter;
