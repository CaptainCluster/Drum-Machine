import React, { useState } from 'react';
import DrumPads from './drum_pads';
import Options from './options';

/**
 * @returns {JSXComponent} A container containing all the JSX components
 */
export default function Container() {
    const [displayLetter, setDisplayLetter] = useState("");

    return (
        <div id="container">
            <div id="drum-machine">
                <DrumPads setDisplayLetter={setDisplayLetter} />
                <Options displayLetter={displayLetter} />
            </div>
        </div>
    );
}
