import React, { useState } from "react";
import { langList } from "./data/langList.js";

function SelectSourceLang ({ onSelect }) {

    const [choice, setChoice] = useState('');

    const handleChoiceChange = (event) => {
        const newSourceLanguage = event.target.value;

        setChoice(newSourceLanguage);
        onSelect(newSourceLanguage);
    }

    return (
        <>
            <select value={choice} onChange={handleChoiceChange}>
                <option value="">Choose a source language</option>
                    {langList.map((source) => (
                        <option key={source.value} value={source.value}>
                            {source.label}
                        </option>
                    ))}
            </select>
        </>
    )
}

export default SelectSourceLang;