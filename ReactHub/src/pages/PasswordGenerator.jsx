import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [lowerAllowed, setlowerAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null);

  const copyPasswordtoClipboard = useCallback(() => {
    if (passwordRef.current) {
      window.navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~";
    if (lowerAllowed) str += "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
      password += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(password);
  }, [length, numberAllowed, charAllowed, lowerAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url('https://cdn.mos.cms.futurecdn.net/JsiJrxSjMKfjp2kjQjBwLb-970-80.jpg.webp')] bg-cover w-full h-screen">"
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-10 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3 text-2xl">Password Generator</h1>
      
      {/* Password Input & Copy Button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="w-full p-2 text-lg text-gray-800 bg-gray-100"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordtoClipboard}
          className="outline-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          Copy
        </button>
      </div>
      {copied && <p className="text-green-400 text-center mt-2">Copied!</p>}

      {/* Password Options */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="mr-3">Length: {length}</label>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="numbers"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="characters"
              checked={charAllowed}
              onChange={(e) => setcharAllowed(e.target.checked)}
            />
            <label htmlFor="characters">Characters</label>
          </div>

          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="lowercasecharacters"
              checked={lowerAllowed}
              onChange={(e) => setlowerAllowed(e.target.checked)}
            />
            <label htmlFor="lowercasecharacters">Lower Case</label>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PasswordGenerator;
