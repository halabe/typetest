'use strict';

import React from 'react';

require('styles//Wordsource.css');

function WordsourceComponent(props) {
    return <div className="wordsource-component"><p>{props.value}</p></div>
}

WordsourceComponent.displayName = 'WordsourceComponent';

// Uncomment properties you need
// WordsourceComponent.propTypes = {};
// WordsourceComponent.defaultProps = {};

export default WordsourceComponent;
