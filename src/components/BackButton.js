import React, { Component } from 'react';

class BackButton extends Component {

  render() {
    return (
      <p className='back-button' onClick={this.props.goBack}>{'< Back'}</p>
    );
  }
}

export default BackButton;
