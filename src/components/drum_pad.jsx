import React, { useRef, useEffect, useState } from 'react';

/**
 * @param {string} drumPadID    - The IDs for the div components representing the drum pads
 * @param {string} inputLetter  - The letter that, as an input, triggers the audio sample. Also, it's displayed in the drum-pad 
 * @param {string} audioFile    - A link to the audio file
 * @param {function(string): void} setDisplayLetter     - A function that expects a string as a parameter 
 * @returns {JSXComponent}      - A drum pad that plays an audio sample if it receives the correct input
 */
export default function DrumPad({ drumPadID, inputLetter, audioFile, setDisplayLetter }) {
    const audioRef = useRef(null);
    const [pressed, setPressed] = useState(false);

    const drumPadPressAction = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setDisplayLetter(inputLetter); // Update display letter when drum pad is clicked

            //Adding a class to temporarily darken the pressed drum pad
            setPressed(true);
            setTimeout(() => {
                setPressed(false);
            }, 200);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key.toLowerCase() === inputLetter.toLowerCase()) {
                drumPadPressAction();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className={`drum-pad ${pressed ? 'drum-pad-pressed' : ''}`} id={drumPadID} onClick={drumPadPressAction}>
            {inputLetter}
            <audio ref={audioRef} className="clip" id={inputLetter} src={audioFile}></audio>
        </div>
    );
}
