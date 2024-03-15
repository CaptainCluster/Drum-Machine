import React, { useEffect, useState } from 'react'

/**
 * @param {string} displayLetter - The letter, from which the chosen sample is identified and displayed 
 * @returns {JSXComponent} - A container that contains the p-tag that displays the latest used sample
 */
export default function Options({displayLetter}) {
    const [displaySample, setDisplaySample] = useState("");

    //Letters in the objects of this list are lowercase to allow case insensitive inputs from the user
    const validInputs = [
        {letter: "q", sample: "Heater 1"},
        {letter: "w", sample: "Heater 2"},
        {letter: "e", sample: "Heater 3"},
        {letter: "a", sample: "Heater 4"},
        {letter: "s", sample: "Clap"},
        {letter: "d", sample: "Open HH"},
        {letter: "z", sample: "Kick n' Hat"},
        {letter: "x", sample: "Kick"},
        {letter: "c", sample: "Closed HH"},
    ];

    useEffect(() => {
        const matchedSample = validInputs.find(item => item.letter == displayLetter.toLowerCase());
        if (matchedSample) {
            setDisplaySample(matchedSample.sample);
        } else {   
            setDisplaySample(""); 
        }
    }, [displayLetter]);

    return(
        <div id="options-container">
            <div id="display-outer">
                <p id="display">{displaySample}</p>
            </div>
        </div>
    );
}