import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { TextInput } from "./components/TextInput/TextInput";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";
import { StatsDisplay } from "./components/StatsDisplay/StatsDisplay";
import type { TextStats } from "./types";

function App() {
  const [count, setCount] = useState(0);

  const textStats: TextStats = {
    characterCount: 1,
    wordCount: 1,
    readingTime: 1,
  };

  return (
    <>
      <h1>Typing Statistics</h1>
      <TextInput onTextChange={() => setCount((count) => count + 1)} />
      <CharacterCounter />
      <StatsDisplay stats={textStats} showReadingTime={true} />
      <button className="btn btn-primary">Characters: {count}</button>
    </>
  );
}

export default App;
