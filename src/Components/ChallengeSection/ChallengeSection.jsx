import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './../ChallengeSection/ChallengeSection.css';

const ChallengeSection = ({startAgain, onInputChange, testInfo, words, characters, wpm, selectedParagraph, timeRemaining, timerStarted}) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take the test and check your typing speed
            </h1>
            <TestContainer
             words={words} 
             characters={characters} 
             wpm={wpm}
             selectedParagraph={selectedParagraph}
             timeRemaining={timeRemaining}
             timerStarted={timerStarted}
             testInfo={testInfo}
             onInputChange={onInputChange}
             startAgain={startAgain}
             />
        </div>
    );
};

export default ChallengeSection;