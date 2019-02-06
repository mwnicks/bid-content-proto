const KEYWORD_MAP = {
  'mps': [
    { code: 'dev', label: 'Developer' },
    { code: 'tech_arch', label: 'Technical Architect' },
    { code: 'designer', label: 'Designer' },
    { code: 'scrum_master', label: 'Scrum Master' }
  ],
  'digi': [
    { code: 'react', label: 'React' },
    { code: 'python', label: 'Python' },
    { code: 'django', label: 'Django' },
    { code: 'scrum', label: 'Scrum' },
    { code: 'azure', label: 'Azure' }
  ],
  'biz': [
    { code: 'transform', label: 'Transformation' },
    { code: 'implement', label: 'Implementation' }
  ],
}

const PROJECT_MAP = {
  'mps': [
    { code: 'phe', label: 'PHE' }
  ],
  'digi': [
    { code: 'phe', label: 'PHE' },
    { code: 'ons', label: 'ONS' },
    { code: 'dit', label: 'DIT' }
  ],
  'biz': [
    { code: 'police', label: 'Kent and Essex Police' }
  ],
}

const RESULTS = [
  {
    keys: ['react', 'phe'],
    content: "For the development of the Public Health Engalnd One You campaign site we used the React Javascript framework. A benefit of using this frameworkwere that we were able to develop a frontend that could be componentise, so we had small peices of functionality that could be self contained and repeated as necessary within pages. It also allowed us to implement an system architecture where changes to the site content could be made and deployed quickly to the public because the it didn't require any code deployment due to the dynamic nature of the frontend."
  }
]

const PEOPLE = [
  {
    keys: ['azure', 'django', 'scrum', 'python', 'react', 'phe', 'dit'],
    person: {
      name: 'Matt Nicks',
      email: 'matt.nicks@methods.co.uk',
      jobTitle: 'Tech Lead'
    }
  },
  {
    keys: ['scrum', 'python', 'ons'],
    person: {
      name: 'Tom Ridd',
      email: 'tom.ridd@methods.co.uk',
      jobTitle: 'Senior Developer'
    }
  }
]

export function loadDivisionKeywords(division) {
  return KEYWORD_MAP[division];
}

export function loadDivisionProjects(division) {
  return PROJECT_MAP[division];
}

export function loadResults(keys) {
  const filteredResults = [];
  RESULTS.map((result) => {
    if (keys.every(elem => result.keys.includes(elem) )) {
      filteredResults.push(result);
    }
  })
  return filteredResults;
}

export function loadPeople(keys) {
  const filteredResults = [];
  PEOPLE.map((result) => {
    if (keys.every(elem => result.keys.includes(elem) )) {
      filteredResults.push(result.person);
    }
  })
  return filteredResults;
}
