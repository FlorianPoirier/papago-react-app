import axios from "axios";
import React, { useState } from "react";

function App() {

  const baseURL = "https://openapi.naver.com/apis/n2mt/translate";

  const [text, setText] = useState("");


  const handleTraduction = () => {

    const urlEncodee = encodeURIComponent(text);
    const tokenClientID = process.env.REACT_APP_CLIENT_ID;
    const tokenClientSecret = process.env.REACT_APP_CLIENT_SECRET;


    const postParams = `source=fr&target=kr&text=${urlEncodee}`;


    axios.post(baseURL, postParams, {
      params: {
        "X-Naver-Client-Id": tokenClientID,
        "X-Naver-Client-Secret": tokenClientSecret,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'X-Naver-Client-Id, X-Naver-Client-Secret, Content-Type',
      },
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Erreur lors de la requête : ', error);
    });

    
    console.log(urlEncodee);

  }

  return (
    <div>
      <h1>Papago React App</h1>

      <input placeholder="Please write here" onChange={e => setText(e.target.value)} ></input>
      <button name="traduire" onClick={handleTraduction}>Traduire</button>

    </div>
  );
}

export default App;
