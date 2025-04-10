import { useState } from 'react';
import ColorBar from './ColorBar';

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div className="w-full h-screen duration-200 transition-colors" style={{ backgroundColor: color }}>
      <ColorBar setColor={setColor} />
    </div>
  );
}

export default App;
