'use strict';

import React from 'react';

require('styles//Wordinput.css');

class WordinputComponent extends React.Component {
    handleChange(event) {
      var text = event.target.value;
      this.props.onChange(this.props.id, text);
    }
    render() {
      return (
        <div className="wordinput-component">
          <input type="text" onChange={this.handleChange.bind(this)} />
        </div>
      );
    }
}

WordinputComponent.displayName = 'WordinputComponent';

// Uncomment properties you need
// WordinputComponent.propTypes = {};
// WordinputComponent.defaultProps = {};

export default WordinputComponent;
