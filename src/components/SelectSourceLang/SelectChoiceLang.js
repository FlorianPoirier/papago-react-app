import React, { useState } from "react";
import { langList } from "../data/langList.js";

function SelectChoiceLang ({ onSelect, langSelectText }) {

    const [choice, setChoice] = useState('');

    const handleChoiceChange = (event) => {
        const newLanguageChoice = event.target.value;

        setChoice(newLanguageChoice);
        onSelect(newLanguageChoice);
    }

    return (
        <>
            <select value={choice} onChange={handleChoiceChange}>
                <option value="">{langSelectText}</option>
                    {langList.map((source) => (
                        <option key={source.value} value={source.value}>
                            {source.label}
                        </option>
                    ))}
            </select>
        </>
    )
}

export default SelectChoiceLang;