import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { TextInput } from "./components/TextInput/TextInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Typing Statistics</h1>
      <TextInput
        onTextChange={() => setCount((count) => count + 1)}
      ></TextInput>
      <button className="btn btn-primary">Characters: {count}</button>
    </>
  );
}

export default App;
