import * as logos from "./assets/logos";

const whatDescStr = "Like I said above, I have skills across the full tech stack but have developed a " +
    "passion for front-end.  There's nothing quite like the gratification of seeing your creations in the " +
    "browser and out on the web!";

const skillData = {
    whatDescription: whatDescStr,
    languages: [
        {
            name: "JavaScript",
            logoPath: logos.javascriptLogo,
            star: true
        },
        {
            name: "HTML",
            logoPath: logos.html5Logo,
            star: true
        },
        {
            name: "CSS",
            logoPath: logos.cssLogo,
            star: true
        },
        {
            name: "Python",
            logoPath: logos.pythonLogo,
            star: false
        },
        {
            name: "Java",
            logoPath: logos.javaLogo,
            star: false
        },
        {
            name: "C/C++",
            logoPath: logos.cplusplusLogo,
            star: false
        }
    ],
    frameworks: [
        {
            name: "React",
            logoPath: logos.reactLogo,
            star: true
        },
        {
            name: "Angular",
            logoPath: logos.angularLogo,
            star: false
        },
        {
            name: "jQuery",
            logoPath: logos.jqueryLogo,
            star: true
        },
        {
            name: "Redux",
            logoPath: logos.reduxLogo,
            star: true
        },
        {
            name: "Bootstrap",
            logoPath: logos.bootstrapLogo,
            star: true
        },
        {
            name: "Less",
            logoPath: logos.lessLogo,
            star: true
        },
        {
            name: "Sass",
            logoPath: logos.sassLogo,
            star: true
        },
        {
            name: "Grunt",
            logoPath: logos.gruntLogo,
            star: false
        },
        {
            name: "Gulp",
            logoPath: logos.gulpLogo,
            star: true
        },
        {
            name: "Webpack",
            logoPath: logos.webpackLogo,
            star: true
        },
        {
            name: "Node",
            logoPath: logos.nodeLogo,
            star: true
        },
        {
            name: "Express",
            logoPath: logos.expressLogo,
            star: true
        },
        {
            name: "TypeScript",
            logoPath: logos.typescriptLogo,
            star: false
        },
        {
            name: "Pug",
            logoPath: logos.pugLogo,
            star: false
        },
        {
            name: "Jasmine",
            logoPath: logos.jasmineLogo,
            star: true
        },
        {
            name: "Karma",
            logoPath: logos.karmaLogo,
            star: true
        },
        {
            name: "Spring",
            logoPath: logos.springLogo,
            star: false
        }
    ]
};

export default skillData;
