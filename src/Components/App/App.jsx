import React from 'react';
import './../App/App.css';
import Nav from './../Nav/Nav';
import Landing from './../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import {SAMPLE_PARAGRAPHS} from './../../Data/SampleParagraph';

const TotalTime = 60;
const serviceurl = 'http://metaphorpsum.com/paragraphs/1/9';
const defaultState = {
    selectedParagraph: '',
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: []
}


// fetch(serviceurl)
// .then(response => response.text())
// .then(data => console.log(data))


class App extends React.Component{
    
    state = defaultState

    fetchNewParagraphFallback = () => {
        const data = SAMPLE_PARAGRAPHS[
            Math.floor((Math.random()) * (SAMPLE_PARAGRAPHS.length))
        ]
        console.log(data);

        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedletter) => {
            return {
                testLetter: selectedletter,
                status: "notattempted"
            }
        });
        this.setState({
            ...defaultState,
            testInfo,
            selectedParagraph: data})
    }

    fetchNewParagraph = () => {
        
        fetch(serviceurl)
        .then(response => response.text())
        .then(data => {
            this.setState({selectedParagraph: data})
            const selectedParagraphArray = this.state.selectedParagraph.split("");
            const testInfo = selectedParagraphArray.map((selectedletter) => {
                return {
                    testLetter: selectedletter,
                    status: "notattempted"
                }
            });
            this.setState({
                ...defaultState,
                testInfo,
                selectedParagraph: data})
        })
    }

    componentDidMount () {
        this.fetchNewParagraphFallback();
    }

    startTimer = () => {
        this.setState({timerStarted: true});
        const timer = setInterval(() => {
            if(this.state.timeRemaining > 0){

                //change the wpm
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm = timeSpent > 0 ? (this.state.words/timeSpent) * TotalTime : 0;

                this.setState({
                    timeRemaining: this.state.timeRemaining -1,
                    wpm: parseInt(wpm)
                })
            }else {
                clearInterval(timer);
            }
        }, 1000)
    }

    startAgain = () => {
        this.fetchNewParagraphFallback();
    }

    handleUserInput = (inputValue) => {
        console.log(inputValue);
        if(!this.state.timerStarted){

            this.startTimer();
        };

        const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;

        if(index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notattempted"
                    },
                    ...this.state.testInfo.slice(1)
                ],
                characters,
                words
            });
            return;
        };

        if(index > this.state.selectedParagraph.length){
            this.setState({
                characters,words
            });
            return;
        }

        //copy of testInfo
        const testInfo = this.state.testInfo;
        if(!(index === this.state.selectedParagraph.length - 1)){
            testInfo[index + 1].status = "notattempted";
        }

        // check for the correct letters

        const isCorrect = inputValue[index] === testInfo[index].testLetter;

        //update the testINfo
        testInfo[index].status = isCorrect ? "correct" : "incorrect";

        //update the state

        this.setState({
            testInfo,words,characters
        })

    };
    
    render() {
        // console.log(this.state.testInfo);
        return (
            <div className="app">
                <Nav />

                <Landing />

                <ChallengeSection 
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />

                <Footer />
            </div>

        )
    }
}

export default App;