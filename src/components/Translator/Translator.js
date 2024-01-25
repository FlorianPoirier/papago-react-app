import axios from "axios";
import React, { useState } from "react";
import SelectChoiceLang from "../SelectSourceLang/SelectChoiceLang.js";

function Translator() {
    const baseURL = 'http://localhost:3001/api/translate';

    const [text, setText] = useState("");
    // eslint-disable-next-line
    const [sourceLang, setlangSource] = useState("en");
    // eslint-disable-next-line
    const [targetLang, setTarget] = useState("ko");
    const [translation, setTranslation] = useState("");

    const handleSourceLang = (newLanguageChoice) => {
        setlangSource(newLanguageChoice);
    }

    const handleTargetLang = (newLanguageChoice) => {
        setTarget(newLanguageChoice);
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
                setTranslation(result);
                console.log(result);
            })
            .catch(error => {
                console.error('Query error: ', error);
                //TODO : flag to prevent mistranslation exemple: french to spanish is impossible with the api
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
            <SelectChoiceLang onSelect={handleSourceLang}></SelectChoiceLang>
            <p>Select target language:</p>
            <SelectChoiceLang onSelect={handleTargetLang}></SelectChoiceLang>
            <h2>Result : {translation}</h2>
        </>
    );
}

export default Translator;