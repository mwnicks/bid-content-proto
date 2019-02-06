import React, { Component } from 'react';
import BackButton from './BackButton';
import { capitalize } from '../helpers/stringHelpers';
import { loadResults, loadPeople } from '../services/requestHandler';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      people: []
    }
    this.closeResults = this.closeResults.bind(this);
  }

  componentWillMount() {
    const searchResults = loadResults(this.props.keys);
    let searchPeople = []
    if (searchResults && searchResults.length === 0) {
      searchPeople = loadPeople(this.props.keys);
    }
    this.setState({ results: searchResults, people: searchPeople });
  }

  closeResults() {
    this.props.closeResults(this.props.division);
  }

  render() {
    const filterKeys = this.props.keys
    const results = this.state.results;
    const people = this.state.people;

    return (
      <div>
        <BackButton goBack={this.closeResults} />

        <div className='filter-list'>
          <p>Filters: </p>

          { filterKeys && filterKeys.map((filterKey, i) =>
            <span className={`filter-key ${this.props.division}`} key={i}>{capitalize(filterKey)}</span>
          )}
        </div>

        <div className='results-list'>
          { (results && results.length > 0) && results.map((result, i) => 
            <div key={i} className='row result'>
              <div className='col-sm-2'>
                { result.keys.map((filterKey, i) =>
                  <span className={`filter-key ${filterKeys.includes(filterKey) ? this.props.division : ''}`} key={i}>{capitalize(filterKey)}</span>
                )}
              </div>

              <div className='col-sm-10 result-content'>
                {result.content}
              </div>
            </div>
          )}

          { (!results || results.length === 0) && 
            <div>
              <div className='row result'>
                <div className='col-12'>
                  <p>No Results found</p>
                  <p>Below is a list of people with relevant experience that may be able to help you</p>
                </div>
              </div>
              { people.map((person, i) =>
                <div key={i} className='row result'>
                  <div className='col-sm-4'>
                    {person.name}
                  </div>

                  <div className='col-sm-4'>
                    {person.jobTitle}
                  </div>

                  <div className='col-sm-4'>
                    {person.email}
                  </div>
                </div>
              )}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default SearchResults;
