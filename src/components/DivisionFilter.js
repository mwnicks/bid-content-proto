import React, { Component } from 'react';
import BackButton from './BackButton';
import { loadDivisionKeywords, loadDivisionProjects } from '../services/requestHandler';
import {removeItem } from '../helpers/arrayHelpers'

const DIVISION_MAP = {
  'mps': 'Professional Services',
  'biz': 'BizTech',
  'digi': 'Digital'
}

class DivisionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: [],
      projects: [],
      selectedKeywords: [],
      selectedProjects: []
    }
    this.findContent = this.findContent.bind(this);
  }

  componentWillMount() {
    let keywords = loadDivisionKeywords(this.props.division);
    let projects = loadDivisionProjects(this.props.division);
    this.setState({keywords: keywords, projects: projects});
  }

  handleKeywordChange(evt) {
    let currentSelection = this.state.selectedKeywords;
    if (evt.target.checked) {
      currentSelection.push(evt.target.value);
    } else {
      currentSelection = removeItem(currentSelection, evt.target.value);
    }
    this.setState({selectedKeywords: currentSelection});
  }

  handleProjectChange(evt) {
    let currentSelection = this.state.selectedProjects;
    if (evt.target.checked) {
      currentSelection.push(evt.target.value);
    } else {
      currentSelection = removeItem(currentSelection, evt.target.value);
    }
    this.setState({selectedProjects: currentSelection});
  }

  findContent() {
    this.props.findContent(this.state.selectedKeywords.concat(this.state.selectedProjects))
  }

  render() {
    const divisionName = DIVISION_MAP[this.props.division];
    const keywords = this.state.keywords;
    const projects = this.state.projects;

    return (
      <div>
        <BackButton goBack={this.props.closeDivision} />
        <p className='page-intro'>Search for content for the <span className='division-name'>{divisionName}</span></p>

        <p>Filters:</p>

        <div className='row'>
          <div className='col-sm-6'>
            <p>Keywords</p>

            { keywords.map((keyword, i) =>
              <div key={i}>
                <input type='checkbox' value={keyword.code} id={keyword.code} onChange={this.handleKeywordChange.bind(this)} />
                <label className='filter-label' htmlFor={keyword.code} >{keyword.label}</label>
              </div>
            )}
          </div>

          <div className='col-sm-6'>
            <p>Projects</p>

            { projects.map((project, i) =>
              <div key={i}>
                <input type='checkbox' value={project.code} id={project.code} onChange={this.handleProjectChange.bind(this)} />
                <label className='filter-label' htmlFor={project.code} >{project.label}</label>
              </div>
            )}
          </div>
        </div>

        <div className='right'>
          <button onClick={this.findContent} className={`${this.props.division} button`}>Find Content ></button>
        </div>
      </div>
    );
  }
}

export default DivisionList;
