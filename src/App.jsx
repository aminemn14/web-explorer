import { useEffect, useState } from 'react';


function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 6 + 1));

  const randomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  }
  
  useEffect(() => {
    setNumber(randomNumber());
    console.log(number)
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Web Explorer</h1>
    </div>
  );
}

export default App;
