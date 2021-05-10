import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './../TypingChallengeContainer/TypingChallengeContainer.css';


const TypingChallengeContainer = ({onInputChange, testInfo, words, characters, wpm, selectedParagraph, timeRemaining, timerStarted}) => {
    return(
        <div className="typing-challenge-container">
            {/* Details section */}
            <div className="details-container">
                {/* words typed */}
                <ChallengeDetailsCard cardName="WORDS" cardValue={words}/>

                {/* characters typed */}
                <ChallengeDetailsCard cardName="CHARACTERS" cardValue={characters}/>
                
                {/* speed */}
                <ChallengeDetailsCard cardName="SPEED" cardValue={wpm}/>
                
            </div>

            {/* the real challenge */}
            <div className="typewriter-container">
                <TypingChallenge 
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                selectedParagraph={selectedParagraph} 
                testInfo={testInfo}
                onInputChange={onInputChange}
                />
            </div>
        </div>
    )
}

export default TypingChallengeContainer;