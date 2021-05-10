import React from 'react';
import './../TryAgain/TryAgain.css';

const TryAgain = ({startAgain, words, characters, wpm}) => {
    return(
        <div className="tryagain-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p>
                    <b>characters: </b> {characters}
                </p>
                <p>
                    <b>words: </b> {words}
                </p>
                <p>
                    <b>speed: </b> {wpm} wpm 
                </p>
            </div>
            <div>
                <button onClick={() => startAgain()} className="end-buttons start-again-button">Re-try</button>
                <button
                onClick={() => {
                    window.open(
                    "https://www.facebook.com/sharer/sharer.php?u=github.com/lanash-1/", 
                    "facebook-share-dialog",
                    "width=800,height=600"
                    )
                }}
                className="end-buttons fb-button">Share</button>
                <button 
                onClick={()=>{
                    window.open(
                        "https://twitter.com/intent/tweet?text=check-it-out",
                        "Twitter",
                        "width=800,height=600"
                    )
                }}
                className="end-buttons tweet-button">tweet</button>
                
            </div>
        </div>
    )
}

export default TryAgain;