const slalomInfo = {
    name: 'Slalom Consulting',
    location: 'Chicago, IL',
    positions: [
        {
            role: 'Senior Software Engineer',
            dates: '09/2016 - 12/2016'
        },
        {
            role: 'Software Engineer',
            dates: '12/2012 - 09/2016'
        }
    ],
    overview: 'Constantly utilized current knowledge and understanding in software engineering practices, programming languages, and quality of product to deliver custom-tailored solutions to clients in a wide range of business and technological fields. This also required learning new technology stacks, standards, and processes in order to best match the deliverable product to the client\'s needs.',
    projects: [
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
            ],
            featureProject: false
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
            ],
            featureProject: true
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
            ],
            featureProject: true
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
            ],
            featureProject: false
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
            ],
            featureProject: false
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
            ],
            featureProject: false
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
            ],
            featureProject: false
        },
    ]
};

const spotheroInfo = {
    name: 'SpotHero',
    location: 'Chicago, IL',
    overview: 'Utilizing React, Redux, and React Router to create customer-facing and internal SPAs. Usage of Python, Django, and the Django REST Framework to create and update RESTful API endpoints for consumption by web and mobile applications.',
    positions: [
        {
            role: 'Engineer II',
            dates: '10/2018 - Present'
        },
        {
            role: 'Engineer I',
            dates: '12/2016 - 10/2018'
        }
    ],
    projects: [
        {
            role: 'Front-End JavaScript Developer',
            duration: '4 months',
            summary: 'Developed a React SPA for internal customer service reps to replace an outdated, hard to navigate dashboard.  Solely responsible for front-end UI/UX implementation.  Created multiple RESTful endpoints using Python, Django, and the Django REST Framework.',
            accomplishments: [
                'Used React best practices on the front-end to deliver a solid user experience',
                'Solely responsible for UI/UX implementation - managing project requirements and scope, implementing desired features before deadlines',
                'Provided input on UI/UX design',
                'Used Python, Django, and Django REST Framework to create RESTful APIs to support the application',
            ],
            tech: [
                'React',
                'Redux',
                'React Router',
                'JavaScript',
                'HTML5',
                'CSS3',
                'Sass',
                'Webpack',
                'Gulp'
            ],
            featureProject: true
        },
        {
            role: 'Front-End JavaScript Developer',
            duration: '3 months',
            summary: 'Created a React SPA for business admins and travel managers to manage employee parking expenses, add/delete employees, and add payment methods.  Developed an in-app onboarding flow for new users.',
            accomplishments: [
                'Used React best practices on the front-end to deliver a solid user experience',
                'Provide input on UI/UX design',
                'Managed project requirements and scope, implementing desired features before a hard deadline'
            ],
            tech: [
                'React',
                'Redux',
                'React Router',
                'JavaScript',
                'HTML5',
                'CSS3',
                'Sass',
                'Webpack',
                'Gulp'
            ],
            featureProject: true
        }
    ]
};

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
        rating: 99
    },
    {
        name: 'Pride in Quality and Productivity',
        rating: 98
    },
    {
        name: 'Design Style',
        rating: 96
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
        rating: 96
    },
    {
        name: 'Communication',
        rating: 97
    },
    {
        name: 'Sense of Fun',
        rating: 100
    }
];

const resumeData = {
    workExperience: [
        spotheroInfo,
        slalomInfo
    ],
    education,
    interests,
    skills
};

export default resumeData;
