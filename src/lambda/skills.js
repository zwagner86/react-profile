const whatDescStr = "Like I said above, I have skills across the full tech stack but have developed a " +
    "passion for front-end.  There's nothing quite like the gratification of seeing your creations in the " +
    "browser and out on the web!";

const skillData = {
    whatDescription: whatDescStr,
    languages: [
        {
            name: "JavaScript",
            logoName: "javascriptLogo",
            star: true
        },
        {
            name: "HTML",
            logoName: "html5Logo",
            star: true
        },
        {
            name: "CSS",
            logoName: "cssLogo",
            star: true
        },
        {
            name: "Python",
            logoName: "pythonLogo",
            star: false
        },
        {
            name: "Java",
            logoName: "javaLogo",
            star: false
        },
        {
            name: "C/C++",
            logoName: "cplusplusLogo",
            star: false
        }
    ],
    frameworks: [
        {
            name: "React",
            logoName: "reactLogo",
            star: true
        },
        {
            name: "Angular",
            logoName: "angularLogo",
            star: false
        },
        {
            name: "jQuery",
            logoName: "jqueryLogo",
            star: true
        },
        {
            name: "Redux",
            logoName: "reduxLogo",
            star: true
        },
        {
            name: "Bootstrap",
            logoName: "bootstrapLogo",
            star: true
        },
        {
            name: "Less",
            logoName: "lessLogo",
            star: true
        },
        {
            name: "Sass",
            logoName: "sassLogo",
            star: true
        },
        {
            name: "Grunt",
            logoName: "gruntLogo",
            star: false
        },
        {
            name: "Gulp",
            logoName: "gulpLogo",
            star: true
        },
        {
            name: "Webpack",
            logoName: "webpackLogo",
            star: true
        },
        {
            name: "Node",
            logoName: "nodeLogo",
            star: true
        },
        {
            name: "Express",
            logoName: "expressLogo",
            star: true
        },
        {
            name: "TypeScript",
            logoName: "typescriptLogo",
            star: false
        },
        {
            name: "Pug",
            logoName: "pugLogo",
            star: false
        },
        {
            name: "Jasmine",
            logoName: "jasmineLogo",
            star: true
        },
        {
            name: "Karma",
            logoName: "karmaLogo",
            star: true
        },
        {
            name: "Spring",
            logoName: "springLogo",
            star: false
        }
    ]
};

export function handler(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({data: skillData})
    });
}
