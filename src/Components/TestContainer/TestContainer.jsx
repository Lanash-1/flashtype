import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './../TestContainer/TestContainer.css';

const TestContainer = ({startAgain, onInputChange, testInfo, words, characters, wpm, selectedParagraph, timeRemaining, timerStarted}) => {

    return (
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                        <TypingChallengeContainer
                        words={words} 
                        characters={characters} 
                        wpm={wpm}
                        selectedParagraph={selectedParagraph}
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                        testInfo={testInfo}
                        onInputChange={onInputChange}
                        />
                    </div>
                ) : (
                    <div className="try-again-container">
                        <TryAgain words={words} characters={characters} wpm={wpm}
                        startAgain={startAgain} 
                        />
                    </div>
                )
            }


        </div>
    )
}

export default TestContainer;