var React = require('react');
var email = require('./img/email.svg');
var github = require('./img/github.png');
var linkedin = require('./img/linkedin.png');
var twitter = require('./img/twitter.svg');

class Footer extends React.Component {
  render() {
    return (
      <div>
        <li className = 'footer'>
          <ul><a href="mailto:samantha.stilson@gmail.com" title="email">
            <img src={email} alt="email" className="icon"/></a></ul>
          <ul><a href="https://github.com/sstilson" target="_blank"
            rel="noopener noreferrer" title="github"><img src={github}
              alt="github" className="icon"/></a></ul>
          <ul><a href="https://linkedin.com/in/samanthastilson" target="_blank"
            rel="noopener noreferrer" title="linkedin"><img src={linkedin}
              alt="linkedin" className="icon"/></a></ul>
          <ul><a href="https://twitter.com/samanthastils" target="_blank"
            rel="noopener noreferrer" title="twitter"><img src={twitter}
              alt="twitter" className="icon"/></a></ul>
        </li>
      </div>
    )
  }
}

module.exports = Footer;
