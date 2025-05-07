import React, { useState } from "react";
import ReactSwitch from "react-switch";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecial, setUseSpecial] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (useUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) chars += "0123456789";
    if (useSpecial) chars += "!@#$%^&*()_+";

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(result);
  };

  return (
    <div className="pt-8 text-white font-bold">
      <div className="flex flex-col items-center">
        <div className="bg-purple-800 w-[350px] shadow-2xl hover:shadow-blue-900 rounded-md p-3">
          <div className="mb-4 flex items-center justify-between">
            <label>Password Length</label>
            <input
              className="w-12 bg-purple-700 pl-2"
              type="number"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              min={4}
              max={32}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Uppercase</label>
            <ReactSwitch
              height={20}
              width={40}
              handleDiameter={18}
              checked={useUppercase}
              onChange={() => setUseUppercase(!useUppercase)}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Numbers</label>
            <ReactSwitch
              height={20}
              width={40}
              handleDiameter={18}
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Special Characters</label>
            <ReactSwitch
              height={20}
              width={40}
              handleDiameter={18}
              checked={useSpecial}
              onChange={() => setUseSpecial(!useSpecial)}
            />
          </div>
          <button
            onClick={generatePassword}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:bg-yellow-500 p-2 m-2 text-white font-bold rounded-md"
          >
            Generate Password
          </button>
          {password && (
            <div className="mt-4 text-center bg-purple-700 p-2 rounded">
              Generated: {password}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
