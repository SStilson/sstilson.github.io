var React = require('react');
var Skills = require('./Skills');
var ExperienceList = require('./ExperienceList');

class Resume extends React.Component {
  render() {
    return (
      <div className='resume'>
        <Skills/>
        <ExperienceList/>
      </div>
    )
  }
}

module.exports = Resume;
