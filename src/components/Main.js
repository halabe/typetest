require('normalize.css/normalize.css');
require('styles/App.css');
import WordsourceComponent from 'components/WordsourceComponent';
import WordinputComponent from 'components/WordinputComponent';

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
    
    constructor() {
      super();
      this.state = {
        words: ['alpha', 'bravo', 'charlie'],
        index: 0,
        inputValue: ''
      };
    }
    handleInputChange(evt) {
        const inputValue = evt.target.value;
        const word = this.state.words[this.state.index];
        if (word == inputValue) {
            var nextIndex = (this.state.index == this.state.words.length-1)? 0 : this.state.index+1;
            this.setState({ index: nextIndex, inputValue: '' });
        } else {
            this.setState({ inputValue: inputValue });
        }
    }
    renderWordsource() {
      const word = this.state.words[this.state.index];
      return <WordsourceComponent value={ word } />;
    }
    renderWordinput() {
      return <WordinputComponent value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
    }
    render() {
      return (
        <div className="index">
          <img src={yeomanImage} alt="Yeoman Generator" />
          <div>{this.renderWordsource()}</div>
          <div>{this.renderWordinput()}</div>
          <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        </div>
      );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
