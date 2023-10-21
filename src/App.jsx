import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [userText, setUserText] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [replacedText, setReplacedText] = useState(""); // Store replaced text in state

  function handleText(e) {
    setUserText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);
    // Calculate and set the replaced text here
    const updatedText = replaceText(userText, "fever dream", "weird thing");
    setReplacedText(updatedText);
  }

  function replaceText(originalText, replaceThis, withThis) {
    return originalText.replace(new RegExp(replaceThis, "gi"), withThis);
  }

  return (
    <>
      <h1>THE RESISTING</h1>
      <h2>DREAMER</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userText}
          onChange={handleText}
          placeholder="what is your dark dream"
        />
        <button type="submit">WAKE UP</button>
      </form>

      {formSubmitted && <p>{replacedText}</p>}
    </>
  );
}

export default App;
