import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(5);
  const [numallow, setNumAllow] = useState(false);
  const [charallow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false); // State for button click effect

  // useRef hook
  const passwordRef = useRef(null);

  // useCallback for password generation
  const PassWordGenerator = useCallback(() => {
    let pass = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numallow) string += '0123456789';
    if (charallow) string += '!@#$%^&*()_+-={}[]~`';

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(string.length * Math.random());
      pass += string.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numallow, charallow]);

  // useEffect to regenerate password on dependency change
  useEffect(() => {
    PassWordGenerator();
  }, [PassWordGenerator]);

  // Copy password to clipboard with click effect
  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
    setClicked(true); // Trigger clicked state
    setTimeout(() => setClicked(false), 200); // Reset after 200ms
  }, [password]);

  return (
    <div className="w-full max-w-screen-sm mx-auto ring-offset-2 shadow-sm hover:shadow-orange-300 rounded-lg px-4 py-4 my-48 text-orange-500 bg-gray-800">
      <h2 className="text-4xl text-center text-white mt-4 mb-6">Password Generator</h2>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          placeholder="Generated Password"
          value={password}
          readOnly
          ref={passwordRef}
          className="w-full px-2 py-2 bg-gray-500 text-white"
        />
        <button
          onClick={copypasswordToClipboard}
          className={`w-1/4 px-2 py-2 bg-zinc-800 text-white duration-75 ${
            clicked ? 'bg-green-600' : 'hover:bg-gray-700'
          }`}
        >
          {clicked ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="flex text-sm gap-x-5">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={4}
            max={16}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={numallow}
            id="numberinput"
            onChange={() => setNumAllow((prev) => !prev)}
          />
          <label htmlFor="numberinput">Include Numbers</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={charallow}
            id="charinput"
            onChange={() => setCharAllow((prev) => !prev)}
          />
          <label htmlFor="charinput">Include Special Character</label>
        </div>
      </div>
    </div>
  );
}


export default App;
