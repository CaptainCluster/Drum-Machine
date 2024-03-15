import React from 'react';
import DrumPad from './drum_pad';

/**
 * @param {function(string): void} setDisplayLetter - A function that expects a string as a parameter 
 * @returns {JSXComponent}
 */
export default function DrumPads({ setDisplayLetter }) {
    const generateDrumPads = () => {
        const inputLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        const drumPadIDs = ["pad-1", "pad-2", "pad-3", "pad-4", "pad-5", "pad-6", "pad-7", "pad-8", "pad-9"];
        const audioFiles = [
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        ];
        const drumPadList = [];

        //Setting up the list of the drum pads
        for (let i = 0; i < 9; i++) {
            drumPadList.push(<DrumPad key={i} drumPadID={drumPadIDs[i]} inputLetter={inputLetters[i]} audioFile={audioFiles[i]} setDisplayLetter={setDisplayLetter} />);
        }
        return drumPadList;
    };

    return (
        <div id="drum-pad-container">
            {generateDrumPads()}
        </div>
    );
}
