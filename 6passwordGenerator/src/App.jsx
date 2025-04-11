import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if (number) str += "1234567890";
    if (character) str += "~!@#$%^&*(){}[]`";

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length); // fixed here
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, number, character, generatePassword]);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className='bg-slate-700 border-2 w-[600px] h-auto rounded-2xl p-6'>
          <div className='flex'>
            <input
              className='bg-white h-10 w-full pl-3 rounded-l-lg'
              type="text"
              value={password}
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
              className='bg-blue-700 w-20 h-10 rounded-r-lg text-white text-2xl cursor-grab '
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>

          <div className='flex mt-4 gap-8'>
            <label>
              <input
                className='mr-2 cursor-pointer'
                type="range"
                min={8}
                max={50}
                value={length}
                onChange={(e) => { setLength(e.target.value) }}
              />
              <span className='text-white'>Length : {length}</span>
            </label>

            <label>
              <input
                className='mr-2 cursor-pointer'
                type="checkbox"
                checked={number}
                onChange={() => setNumber((prev) => !prev)}
              />
              <span className='text-white'>Numbers</span>
            </label>

            <label>
              <input
                className='mr-2 cursor-pointer'
                type="checkbox"
                checked={character}
                onChange={() => setCharacter((prev) => !prev)}
              />
              <span className='text-white'>Characters</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
