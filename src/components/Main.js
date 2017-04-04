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
        index: 0
      };
    }
    renderWordsource() {
      const word = this.state.words[this.state.index];
      return <WordsourceComponent value={ word } />;
    }
    renderWordinput() {
      return <WordinputComponent id={1} onChange={ this.onChange.bind(this) }/>;
    }
    onChange(id, value) {
        const word = this.state.words[this.state.index];
        if (word == value) {
            alert('yes');
            var nextIndex = (this.state.index == this.state.words.count-1)? 0 : this.state.index+1;
            this.setState({ words:this.state.words, index:nextIndex });
        }
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
