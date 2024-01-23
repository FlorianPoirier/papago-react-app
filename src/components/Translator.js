import axios from "axios";
import React, { useState } from "react";
import SelectSourceLang from "./SelectSourceLang.js";

function Translator() {
    const baseURL = 'http://localhost:3001/api/translate';

    const [text, setText] = useState("");
    // eslint-disable-next-line
    const [sourceLang, setlangSource] = useState("en");
    // eslint-disable-next-line
    const [targetLang, setTarget] = useState("ko");

    const handleSourceLang = (newSourceLanguage) => {
        setlangSource(newSourceLanguage);
    }

    const handleTraduction = () => {

        const params = {
            source: sourceLang,
            target: targetLang,
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
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Papago React App</h1>
            </div>

            <div style={{ marginLeft: '20px' }}>
                <input type="text"
                    style={{ width: '600px', height: '340px', verticalAlign: 'top' }}
                    placeholder="Please write here" onChange={e => setText(e.target.value)}>
                </input>
            </div>
            <button name="translate" onClick={handleTraduction}>Translate</button>
            <p>Select source language:</p>
            <SelectSourceLang onSelect={handleSourceLang}></SelectSourceLang>
            
        </>
    );
}

export default Translator;