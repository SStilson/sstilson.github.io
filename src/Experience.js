var React = require('react');
var PropTypes = require('prop-types');

class Experience extends React.Component {
  constructor(props) {
		super(props);
    this.props = props;
  }

  render() {
    return (
      <div className='experience'>
        <h2 className='experience-title'>{this.props.experienceTitle}</h2>
        <h4 className='experience-dates'>{this.props.experienceDates}</h4>
        <p className='experience-description'>{this.props.experienceDescription}</p>
      </div>
    )
  }
}

Experience.propTypes = {
  experienceTitle: PropTypes.string.isRequired,
  experienceDates: PropTypes.string.isRequired,
  experienceDescription: PropTypes.string.isRequired
}

module.exports = Experience;
