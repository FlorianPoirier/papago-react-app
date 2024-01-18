import axios from "axios";
import React, { useState } from "react";

function App() {

  const baseURL = 'http://localhost:3001/api/translate';

  const [text, setText] = useState("");

  const handleTraduction = () => {

    const params = {
      source: "en",
      target: "ko",
      text: text,
    };

    axios.post(baseURL, params)
      .then(response => {
        const result = response.data.message.result.translatedText;
        console.log(result);
      })
      .catch(error => {
        console.error('Query error: ', error);
      });
  }

  return (
    <div>
      <h1>Papago React App</h1>

      <input placeholder="Please write here" onChange={e => setText(e.target.value)}></input>
      <button name="translate" onClick={handleTraduction}>Translate</button>

    </div>
  );
}

export default App;
