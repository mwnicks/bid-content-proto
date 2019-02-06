const KEYWORD_MAP = {
  'mps': [
    { code: 'dev', label: 'Developer' },
    { code: 'tech_arch', label: 'Technical Architect' },
    { code: 'designer', label: 'Designer' },
    { code: 'scrum_master', label: 'Scrum Master' }
  ],
  'digi': [
    { code: 'react', label: 'React' },
    { code: 'angular', label: 'AngularJS' },
    { code: 'js', label: 'Javascript' },
    { code: 'python', label: 'Python' },
    { code: 'django', label: 'Django' },
    { code: 'flask', label: 'Flask' },
    { code: 'wagtail', label: 'Wagtail' },
    { code: 'ruby', label: 'Ruby' },
    { code: 'rails', label: 'Rails' },
    { code: 'java', label: 'Java' },
    { code: 'spring', label: 'Spring' },
    { code: 'dropwizard', label: 'DropWizard' },
    { code: 'php', label: 'PHP' },
    { code: 'wordpress', label: 'Wordpress' },
    { code: 'tdd', label: 'TDD' },
    { code: 'bdd', label: 'BDD' },
    { code: 'ddd', label: 'DDD' },
    { code: 'aws', label: 'AWS' },
    { code: 'azure', label: 'Azure' },
    { code: 'scrum', label: 'Scrum' },
    { code: 'agile', label: 'Agile' },
    { code: 'iterative_development', label: 'Iterative Development' }
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
    { code: 'dit', label: 'DIT' },
    { code: 'nhs', label: 'NHS' },
    { code: 'nhse', label: 'NHS England' }
  ],
  'biz': [
    { code: 'police', label: 'Kent and Essex Police' }
  ],
}

const RESULTS = [
  {
    keys: ['react', 'phe'],
    content: "For the development of the Public Health Engalnd One You campaign site we used the React Javascript framework. A benefit of using this frameworkwere that we were able to develop a frontend that could be componentise, so we had small peices of functionality that could be self contained and repeated as necessary within pages. It also allowed us to implement an system architecture where changes to the site content could be made and deployed quickly to the public because the it didn't require any code deployment due to the dynamic nature of the frontend."
  },
  {
    keys: ['nodejS', 'scrum', 'ruby', 'jenkins', 'ci', 'cd', 'dit'],
    content: "Working with the internal DIT staff we developed the first iteration of the ‘Invest in Great’ website, encouraging foreign companies to base their company in the UK. The site was designed to be mobile first as user research had indicated that was how the majority of users would interact with it, designs were developed and finessed by engaging in user research and testing and accessibility testing. The architecture of the new site and support system was designed with ease of maintenance and site performance in mind, the site utilised a type of CMS to allow the content to be edited and maintained with out the need for developer input. To optimise site performance a continuous integration and deployment pipeline was designed that complied the content in to designed templates producing an output of flat HTML files which could be served directly, improving page load time and performance by not introducing a database call in to the load process that occurs in many CMS’s. The pipeline was also designed to carry out unit and accessibility testing to ensure the site being deployed was of the highest quality possible. As the site was an international facing site it needed to be multilingual, as well as providing the option to change the language the site was displayed in the site was designed to detect the location of the user accessing it and automatically display in the most appropriate language available."
  },
  {
    keys: ['iterative_development', 'nhs', 'nhse'],
    content: "For NHS England, Methods developed a case management system for carrying out and monitoring the progress of annual assessments of hospital performance. We worked on the project from discovery all the way through to live support, at each stage taking learnings and iterating the design and approach we took. This involved prototyping designs and workflows, reviewing with users and iterating and also trialing technical approaches to probable areas of complexity, learning what worked well and implementing that approach in to the build. This approach was undertaken throughout the build and in to the live support."
  }
]

const PEOPLE = [
  {
    keys: ['react', 'angular', 'js', 'python', 'django', 'wagtail', 'ruby', 'rails', 'java', 'spring', 'dropwizard', 'php', 'wordpress', 'tdd', 'bdd', 'ddd', 'aws', 'azure', 'scrum', 'agile', 'iterative_development', 'phe', 'dit', 'nhs', 'nhse'],
    person: {
      name: 'Matt Nicks',
      email: 'matt.nicks@methods.co.uk',
      jobTitle: 'Tech Lead'
    }
  },
  {
    keys: ['python', 'flask', 'java', 'dropwizard', 'tdd', 'bdd', 'aws', 'scrum', 'agile', 'iterative_development', 'ons', 'nhs', 'nhse'],
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
