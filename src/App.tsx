import { useState } from "react";
import { TextInput } from "./components/TextInput/TextInput";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";
import { StatsDisplay } from "./components/StatsDisplay/StatsDisplay";
import type { TextStats } from "./types";
import { Container, Grid } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState("0:00");

  function handleTextAreaInputChange(inpVal: string) {
    const textVal = inpVal.trim();
    if (textVal === "") {
      console.log(textVal === "");
      setCount(0);
      setWordCount(0);
      setReadingTime("0:00");
      return;
    }

    setCount(textVal.length);

    const words = textVal.split(/\s+/);
    setWordCount(words.length);

    const totalMinutes = Math.floor(words.length / 200);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const minutesStr = String(minutes).padStart(2, "0");
    const hoursAndMinutes = `${hours}:${minutesStr}`;
    setReadingTime(hoursAndMinutes);
  }

  const textStats: TextStats = {
    characterCount: count,
    wordCount: wordCount,
    readingTime: readingTime,
  };

  return (
    <>
      <Container maxWidth="sm">
        <Grid container spacing={2} columns={{ xs: 4, sm: 12 }}>
          <Grid size={12}>
            <h1>Typing Statistics</h1>
          </Grid>
          <Grid size={12}>
            <TextInput onTextChange={handleTextAreaInputChange} />
          </Grid>
          <Grid size={12}>
            <StatsDisplay stats={textStats} showReadingTime={true} />
            <CharacterCounter minWords={25} maxWords={100} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
