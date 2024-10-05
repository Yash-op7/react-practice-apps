import { useEffect, useState } from "react";
import randomColorGenerator from "./utils/randomColorGenerator";
import ColorBox from "./components/ColorBox";
import ColorOption from "./components/ColorOption";

function App() {
  const [colors, setColors] = useState([]);
  const [randomIdx, setRandomIdx] = useState(0);
  const [answer, setAnswer] = useState("waiting");
  const [reload, setReload] = useState(false);
  const [countdown, setCountdown] = useState(0); // State for countdown
  const [totalScore, setTotalScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setColors([]);
    for (let i = 0; i < 3; i++) {
      setColors((prev) => [...prev, randomColorGenerator()]);
    }
    setRandomIdx(Math.floor(Math.random() * 3));
    setAnswer("waiting");
    setCountdown(0); // Reset countdown when the game reloads
  }, [reload]);

  function checkAnswer(idx) {
    setIsLoading(true);
    if (idx === randomIdx) {
      setAnswer("correct");
      setTotalScore((prev) => prev + 1);
    } else {
      setAnswer("wrong");
    }

    // Start 3-second countdown
    setCountdown(3);
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0.5) {
          clearInterval(countdownInterval); // Stop countdown when it reaches 0
          setReload((prev) => !prev); // Trigger reload after 3 seconds
          setIsLoading(false);
        }
        return prev - 0.5;
      });
    }, 500); // Update countdown every second
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen border">
      <h1 className="text-4xl">Color Guesser Game</h1>
      <div>
        <ColorBox color={colors[randomIdx]} />
      </div>
      <div className="flex flex-row gap-5">
        {colors.map((color, idx) => {
          return (
            <div
              className="bg-green-400 hover:bg-green-600"
              onClick={() => !isLoading&&checkAnswer(idx)}
              key={idx}
            >
              <ColorOption color={color} />
            </div>
          );
        })}
      </div>
      <div>
        {answer === "waiting" ? (
          <p>click any option to guess</p>
        ) : answer === "correct" ? (
          <p>✅</p>
        ) : (
          <p>❌</p>
        )}
      </div>
      <p>correct code is {colors[randomIdx]}</p>

      <p>Score thus far is {totalScore}</p>

      {/* Countdown display */}
      {countdown > 0 && (
        <p className="mt-5 text-lg text-red-600">
          Reloading in {countdown}...
        </p>
      )}
    </div>
  );
}

export default App;
