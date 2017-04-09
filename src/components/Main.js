import React from 'react';

// wordsource shows the word we want user to type
function WordsourceComponent(props) {
    return (<div><p>{props.value}</p></div>);
}

// wordinput is an input that calls a function in the app when it's value changes
function WordinputComponent(props) {
    return (
        <div>
            <input type="text" value={props.value} onChange={props.onChange} />
        </div>
    );
}

class AppComponent extends React.Component {
    // the app state is a list of test words, the index of the current test word,
    // the current user input and the number of words entered correctly
    constructor() {
        super();
        this.state = {
            words: ['alpha', 'bravo', 'charlie'],
            index: 0,
            inputValue: '',
            correctCount: 0
        };
    }
    // when user types, see if the user input matches the current test word
    // if it matches, increment the index to the next test word in the list (or the start of the list) and
    // increment the count of correctly entered words.
    // update the state.  (react updates the UI when the state changes)
    handleInputChange(evt) {
        const inputValue = evt.target.value;
        const word = this.state.words[this.state.index];
        if (word == inputValue) {
            var nextIndex = (this.state.index == this.state.words.length-1)? 0 : this.state.index+1;
            this.setState({ index: nextIndex, inputValue: '', correctCount: this.state.correctCount+1 });
        } else {
            this.setState({ inputValue: inputValue });
        }
    }
    // the app is the the current test word, an input for the user to type it and 
    // the count of words entered correctly
    render() {
        const word = this.state.words[this.state.index];
        const inputValue = this.state.inputValue;
        const correctCount = this.state.correctCount;
        return (
        <div>
            <WordsourceComponent value={ word } />
            <WordinputComponent value={ inputValue } onChange={this.handleInputChange.bind(this)}/>
            <p>Correct = { correctCount }</p>
        </div>
      );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
