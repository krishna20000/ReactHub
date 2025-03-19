import React, { useState } from 'react';
import useCurrencyInfo from '../hooks/useCurrencyInfo';
import InputBox from './InputBox';

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const exchangeRates = useCurrencyInfo(fromCurrency);

  const convertedAmount = exchangeRates[toCurrency] ? (amount * exchangeRates[toCurrency]).toFixed(2) : 'Calculating...';

  // Swap function
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount); // Swap the amount as well
  };

  return (
    <div className="min-h-screen w-full  flex items-center justify-center text-white" style={{ backgroundImage: `url('https://img.freepik.com/free-vector/digital-currency-indain-rupee-symbol-background-with-circuit-lines_1017-45128.jpg?t=st=1742321638~exp=1742325238~hmac=5ec2d9fd957077257999db475fa7f4c4cd17e4db7f0481a122e057392a5b1c8e&w=1380')`}}>
      <div className="p-8 bg-gray-800 text-white rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-center text-3xl font-bold mb-6 text-blue-400">💰 Currency Converter</h2>

        {/* Input Box 1 - FROM */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <InputBox 
            label="From"
            amount={amount}
            onAmountChange={setAmount}
            onCurrencyChange={setFromCurrency}
            currencyOptions={Object.keys(exchangeRates)}
            selectCurrency={fromCurrency}
          />
        </div>

        {/* Swap Button */}
        <div className="flex justify-center my-6">
          <button 
            onClick={handleSwap}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg transition flex items-center text-lg"
          >
            🔄 Swap
          </button>
        </div>

        {/* Input Box 2 - TO */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <InputBox 
            label="To"
            amount={convertedAmount}
            currencyOptions={Object.keys(exchangeRates)}
            selectCurrency={toCurrency}
            onCurrencyChange={setToCurrency}
            amountDisabled={true}
          />
        </div>

        <p className="text-center mt-6 text-sm text-gray-400">Exchange rates update in real-time 🌍</p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
