import React, { Component } from 'react';
import './App.css';
import DivisionList from './components/DivisionList';
import DivisionFilter from './components/DivisionFilter';
import SearchResults from './components/SearchResults';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDivisions: true,
      showDivision: false,
      visibleDivision: '',
      showResults: false,
      keys: []
    }

    this.closeDivision = this.closeDivision.bind(this);
    this.openDivision = this.openDivision.bind(this);
    this.findContent = this.findContent.bind(this);
  }

  openDivision(division) {
    this.setState({showDivisions: false, showDivision: true, visibleDivision: division, showResults: false, keys: []});
  }

  closeDivision() {
    this.setState({showDivisions: true, showDivision: false, visibleDivision: '', showResults: false, keys: []});
  }


  findContent(keys) {
    this.setState({showDivisions: false, showDivision: false, showResults: true, keys: keys});
  }

  render() {
    let showDivisions = this.state.showDivisions;
    let showDivision = this.state.showDivision;
    let showResults = this.state.showResults;
    let visibleDivision = this.state.visibleDivision;

    return (
      <div className="container">
        <Header />

        { showDivisions && 
          <DivisionList openDivision={this.openDivision} />
        }

        { showDivision &&
          <DivisionFilter closeDivision={this.closeDivision}
            findContent={this.findContent}
            division={visibleDivision} />
        }
        { showResults &&
          <SearchResults closeResults={this.openDivision}
            keys={this.state.keys}
            division={visibleDivision} />
        }
      </div>
    );
  }
}

export default App;
