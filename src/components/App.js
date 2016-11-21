import React, { Component } from 'react';
import ProfileInfo from './profile-info/ProfileInfo';
import SkillInfo from './skill-info/SkillInfo';
import * as logos from '../assets/logos/logos';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

class App extends Component {

  myData = {
    whatDescription: "Like I said above, I have skills across the full tech stack but have developed a passion for front-end.  There's nothing quite like the gratification of seeing your creations in the browser and out on the web!",
    languages: [
      {
        name: "JavaScript",
        logoPath: logos.javascriptLogo,
        star: true
      },
      {
        name: "Java",
        logoPath: logos.javaLogo,
        star: true
      },
      {
        name: "HTML",
        logoPath: logos.html5Logo,
        star: true
      },
      {
        name: "CSS",
        logoPath: logos.html5Logo,
        star: true
      },
      {
        name: "Python",
        logoPath: logos.pythonLogo,
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
        name: "Angular",
        logoPath: logos.angularLogo,
        star: true
      },
      {
        name: "React",
        logoPath: logos.reactLogo,
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
        name: "jQuery",
        logoPath: logos.jqueryLogo,
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

  render() {
    console.log(logos);
    return (
      <div className="App container profile">
        <ProfileInfo />
        <SkillInfo whatDescription={this.myData.whatDescription} languages={this.myData.languages} frameworks={this.myData.frameworks} />
      </div>
    );
  }
}

export default App;
