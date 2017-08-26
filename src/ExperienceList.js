var React = require('react');
var Experience = require('./Experience');

class ExperienceList extends React.Component {
  render() {
    const experienceOne = {
      title: 'Software Engineer at ThoughtWorks',
      dates: 'February 2016 - Present',
      description: 'So far, I\'ve developed multiple applications for web and mobile, using technologies like ReactJS, AngularJS, Java, and SASS. Presented solutions to technical and business solutions, and drove growth at multiple clients. Also worked with several microservices transformations.'
    }
    const experienceTwo = {
      title: 'Software Engineer at Beyrep',
      dates: 'June - October 2015',
      description: 'Worked as a front-end engineer at early stage startup. Initiated mobile redesign, led weekly requirements meetings, and developed the front-end of the web application in vanilla JavaScript, HTML, and CSS.'
    }
    const experienceThree = {
      title: 'Harvey Mudd College',
      dates: 'August 2011 - May 2015',
      description: 'Bachelor of Science with Distinction. Relevant coursework: Software Development; User Interface Design; Data Structures & Program Development. Tutored Computer Science courses at all levels.'
    }
    return (
      <div className='resume_section'>
        <h2 className='resume_title'>Experience</h2>
        <Experience
          experienceTitle={experienceOne.title}
          experienceDates={experienceOne.dates}
          experienceDescription={experienceOne.description}/>
        <Experience
          experienceTitle={experienceTwo.title}
          experienceDates={experienceTwo.dates}
          experienceDescription={experienceTwo.description}/>
        <Experience experienceTitle={experienceThree.title}
          experienceDates={experienceThree.dates}
          experienceDescription={experienceThree.description}/>
      </div>
    )
  }
}

module.exports = ExperienceList;
