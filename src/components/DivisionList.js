import React, { Component } from 'react';

class DivisionList extends Component {
  openDivision(division) {
    this.props.openDivision(division);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-6'>
          <div className='division mps' onClick={this.openDivision.bind(this, 'mps')}>
            <p className='name'>
              Professional Services >
            </p>
          </div>

          <div className='division biz' onClick={this.openDivision.bind(this, 'biz')}>
            <p className='name'>
              Biztech >
            </p>
          </div>
        
          <div className='division digi' onClick={this.openDivision.bind(this, 'digi')}>
            <p className='name'>
              Digital >
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DivisionList;
