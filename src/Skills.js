var React = require('react');

class Skills extends React.Component {
  render() {
    return (
      <div className='resume_section'>
        <h2 className='resume_title'>Skills</h2>
        <h3 className='skills_title'>Languages and Frameworks</h3>
          <ul className='skills_section'>
            <li className='skills_item'>JavaScript</li>
            <li className='skills_item'>Java</li>
            <li className='skills_item'>HTML 5</li>
            <li className='skills_item'>CSS 3</li>
            <li className='skills_item'>SASS</li>
            <li className='skills_item'>Python</li>
            <li className='skills_item'>ReactJS</li>
            <li className='skills_item'>AngularJS</li>
            <li className='skills_item'>NodeJS</li>
            <li className='skills_item'>Spring</li>
            <li className='skills_item'>NGINX</li>
            <li className='skills_item'>Handlebars</li>
            <li className='skills_item'>Ruby</li>
          </ul>
        <h3 className='skills_title'>Tools and Platforms</h3>
        <ul className='skills_section'>
          <li className='skills_item'>Jenkins</li>
          <li className='skills_item'>New Relic</li>
          <li className='skills_item'>Optimizely</li>
          <li className='skills_item'>Mixpanel</li>
          <li className='skills_item'>Heroku</li>
          <li className='skills_item'>Cloud Foundry</li>
          <li className='skills_item'>Kubernetes</li>
          <li className='skills_item'>Sketch</li>
        </ul>
      </div>
    )
  }
}

module.exports = Skills;
