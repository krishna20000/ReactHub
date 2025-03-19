import React, { useState } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("linear-gradient(to right, #ff7e5f, #feb47b)"); // Default gradient

  return (
    <div 
      className="h-screen flex flex-col items-center justify-center transition-colors duration-300 p-6"
      style={{ background: color, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Background Changer</h2>
        <div className="flex space-x-4">
          <button onClick={() => setColor("red")} className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all">Red</button>
          <button onClick={() => setColor("green")} className="px-5 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all">Green</button>
          <button onClick={() => setColor("blue")} className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">Blue</button>
          <button onClick={() => setColor("purple")} className="px-5 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition-all">Purple</button>
          <button onClick={() => setColor("url('https://images.pexels.com/photos/5475793/pexels-photo-5475793.jpeg?auto=compress&cs=tinysrgb&w=600')")} className="px-5 py-2  bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition-all">Random Image</button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;
