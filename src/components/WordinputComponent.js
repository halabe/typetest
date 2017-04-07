'use strict';

import React from 'react';

require('styles//Wordinput.css');

class WordinputComponent extends React.Component {
    render() {
      return (
        <div>
          <input type="text" value={this.props.value} onChange={this.props.onChange} />
        </div>
      );
    }
}

WordinputComponent.displayName = 'WordinputComponent';

// Uncomment properties you need
// WordinputComponent.propTypes = {};
// WordinputComponent.defaultProps = {};

export default WordinputComponent;
