import React, { Component } from 'react';
import logo from '../assets/images/methods-logo.png';

class DivisionList extends Component {
  openDivision(division) {
    this.props.openDivision(division);
  }

  render() {
    return (
      <header className="header">
        <img src={logo} className="logo" alt="Methods logo" />
        
        <p>
          Bid content finder
        </p>
      </header>
    );
  }
}

export default DivisionList;
