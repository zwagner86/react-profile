const createTechStringFromArray = array => {
    let techString = '';
    for ( let techItem of array ) {
        techString += techItem + ', ';
    }
    return techString.slice(0, techString.length - 2);
};

const createInterestStringFromArray = array => {
    let interestString = '';
    for ( let interestItem of array ) {
        interestString += interestItem + '  |  ';
    }
    return interestString.slice(0, interestString.length - 5);
}

const slalomProjects = [
    {
        role: 'Front-End JavaScript Developer',
        client: 'Networking Solutions Company',
        duration: '4 months',
        summary: 'Developing a Salesforce portal to allow customers and partners to access information on their products, including downloads, licenses, and assets.  Solely responsible for front-end UI/UX implementation.',
        accomplishments: [
            'Using Visualforce with jQuery and Bootstrap CSS framework on the front-end to deliver a solid user experience',
            'Solely responsible for UI/UX implementation - managing project requirements and scope, implementing desired features before deadlines',
            'Provide input on UI/UX design'
        ],
        tech: [
            'Visualforce',
            'JavaScript',
            'jQuery',
            'HTML5',
            'CSS3',
            'Bootstrap'
        ]
    },
    {
        role: 'Full Stack Developer',
        client: 'Amazon Echo/Alexa Hackathon',
        duration: '2 months',
        summary: 'Single-handedly created a new front-end application to be professional, visually appealing, and easy to use. Designed and implemented a new, responsive UI based on research into similar web applications. Achieved 100% front-end unit test coverage using Karma/Jasmine. Created RESTful endpoints using Java/Spring Boot to be used by both the Alexa skill and web application.',
        accomplishments: [
            'Utilizing AngularJS, HTML5, and CSS3 with Bootstrap, single-handedly overhauled the front-end application to be more complete, professional, visually appealing, and easy to use',
            'Designed and implemented a new, responsive UI based on research into similar food-related web applications',
            'Achieved 100% front-end unit test coverage using Karma/Jasmine',
            'Created RESTful endpoints using Java/Spring Boot to be used by both the Alexa skill and web application'
        ],
        tech: [
            'AngularJS',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Bootstrap',
            'Karma',
            'Jasmine',
            'Java',
            'Spring Boot',
            'Grunt'
        ]
    },
    {
        role: 'Front-End JavaScript Developer',
        client: 'Communications Company',
        duration: '1 year, 8 months',
        summary: 'Developed a modern, responsive, web access portal for small business customers to access/configure products, view and pay bills, create and edit contacts, and access voicemail and call logs, among other functionality, via RESTful API endpoints.',
        accomplishments: [
            'Developed a modern web application using AngularJS, HTML5 with Jade/Pug templating engine, and CSS3 with Bootstrap and LessJS',
            'Created services to use RESTful API endpoints to handle data throughout the application',
            'Used NodeJS/ExpressJS to create a mock API server using back-end API specs to speed up development time',
            'Utilized Grunt for build and deployment tasking'
        ],
        tech: [
            'AngularJS',
            'JavaScript',
            'HTML5',
            'CSS3',
            'NodeJS',
            'ExpressJS',
            'Jade/Pug',
            'Bootstrap',
            'LessJS',
            'Karma',
            'Jasmine',
            'Grunt'
        ]
    },
    {
        role: 'Front-End JavaScript Developer',
        client: 'Retail Company',
        duration: '3 months',
        summary: 'Developed a hybrid mobile application used by store associates to track and fulfill incoming customer orders.',
        accomplishments: [
            'Developed a HTML/JavaScript Cordova PhoneGap mobile application',
            'Used jQuery, Backbone.js, Underscore.js, and Require.js to enhance and stabilize searching and result display for customer orders'
        ],
        tech: [
            'JavaScript',
            'jQuery',
            'BackboneJS',
            'Cordova/PhoneGap',
            'HTML5',
            'CSS3'
        ]
    },
    {
        role: 'Full Stack Developer',
        client: 'Retail Company',
        duration: '4 months',
        summary: 'Created a prototype for a web application to ensure compliance with company standards by allowing a user to view and analyze vendor statistics retrieved from multiple backend data sources.',
        accomplishments: [
            'Used Java, Spring, and SQL to create back-end services to retrieve vendor data from multiple data sources',
            'Developed front-end web application using AngularJS, HTML5, and CSS3',
            'Created a batch job to populate memcache with most recent vendor data'
        ],
        tech: [
            'AngularJS',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Java',
            'Spring',
            'SQL'
        ]
    },
    {
        role: 'Full Stack Developer',
        client: 'Biotechnology Company',
        duration: '4 months',
        summary: 'Developed a full-stack solution for a major biotechnology company on the west coast which enabled the management of clinical trials by allowing the creation and management of studies and study plans with access to all the data from their main data warehouse.',
        accomplishments: [
            'Used jQuery, RequireJS, BackboneJS, MustacheJS, UnderscoreJS, HTML, and CSS to develop a web application to manage studies and study plans for clinical trials',
            'Used Java/Spring to create backend services for handling data',
            'Created an ETL process to pull in study data from a main data warehouse using Oracle - PL/SQL',
            'Used QlikView to create reports and visualization from the study data'
        ],
        tech: [
            'JavaScript',
            'jQuery',
            'BackboneJS',
            'MustacheJS',
            'HTML5',
            'CSS3',
            'Java',
            'Spring',
            'Oracle - PL/SQL',
            'Qlikview'
        ]
    },
    {
        role: 'Full Stack Developer',
        client: 'Health Insurance Company',
        duration: '8 months',
        summary: 'Delivered a brand new digital experience that allowed the client to attract new customers by offering an easy-to-use interface and holistic view of their current and historical health insurance coverage.',
        accomplishments: [
            'Wrote extensive Selenium tests that ran against SauceLabs to automate testing across different devices and browsers',
            'Added impersonation capabilities for customer service representatives to assist members in real-time over the phone',
            'Helped migrate over 1 million users using the Spring Batch framework, Hibernate, and SOAP web services',
            'Integrated with Adobe CQ to provide dynamic and context-aware content to members'
        ],
        tech: [
            'JavaScript',
            'jQuery',
            'BackboneJS',
            'MustacheJS',
            'HTML5',
            'CSS3',
            'Java',
            'Spring'
        ]
    },
];

const education = {
    date: '2012',
    degree: 'Bachelor of Science',
    school: 'Illinois Institute of Technology',
    major: 'Information Technology and Web Design',
    specialization: 'Web Design and Application Development'
};

const interests = [
    'Web Development',
    'React Native',
    'Hybrid Mobile Applications',
    'Athletics',
    'Fitness',
    'Health',
    'Reading'
];

const skills = [
    {
        name: 'Development Skills/Techniques',
        rating: 95
    },
    {
        name: 'Pride in Quality and Productivity',
        rating: 94
    },
    {
        name: 'Design Style',
        rating: 95
    },
    {
        name: 'Methodical Problem Solving',
        rating: 100
    },
    {
        name: 'Creativity',
        rating: 100
    },
    {
        name: 'Goal Oriented',
        rating: 97
    },
    {
        name: 'Leverages/Reuses Code',
        rating: 95
    },
    {
        name: 'Communication',
        rating: 93
    },
    {
        name: 'Sense of Fun',
        rating: 100
    }
];

const resumeData = {
    createTechStringFromArray,
    createInterestStringFromArray,
    slalomProjects,
    education,
    interests,
    skills
};

export default resumeData;
