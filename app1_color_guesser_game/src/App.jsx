import { useState, useEffect } from 'react';
import randomColorGenerator from './utils/randomColorGenerator';
import ColorBox from './components/ColorBox';

function App() {
  const [colors, setColors] = useState([]);
  const [randomIdx, setRandomIdx] = useState(null);
  const [correct, setCorrect] = useState(null);

  useEffect(() => {
    const newColors = Array.from({ length: 3 }, () => randomColorGenerator());
    const randomIndex = Math.floor(Math.random() * 3);
    
    setColors(newColors);
    setRandomIdx(randomIndex);
  }, []);

  const checkAnswer = (color) => {
    setCorrect(color === colors[randomIdx]);
  };

  return (
    <div className='flex flex-col items-center m-10'>
      {randomIdx !== null && <ColorBox color={colors[randomIdx]} />}
      <div className='flex flex-row gap-4 mt-5'>
        {colors.map((color, idx) => (
          <button 
            key={idx} 
            onClick={() => checkAnswer(color)} 
            className='h-12 w-12 border-2 border-gray-300 rounded cursor-pointer font-bold text-white overflow-hidden'
            style={{ backgroundColor: color }}
          >
            {color}
          </button>
        ))}
      </div>
      {correct !== null && (
        <p className='mt-5 text-xl font-bold'>
          {correct ? 'Correct Answer ✅' : 'Wrong Answer ❌'}
        </p>
      )}
    </div>
  );
}

export default App;
