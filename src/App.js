var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Introduction = require('./Introduction');
var Resume = require('./Resume');
var Footer = require('./Footer');
var ResumePDF = require('./ResumePDF');

require ('./App.css');

class App extends React.Component {
  render() {
    return (
      <Router>
          <div className = 'container'>
          <Nav/>
            <Switch>
              <Route exact path='/' component={Introduction} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/resume-pdf' component={ResumePDF} />
              <Route render={function() {
                return <p>Not Found</p>
              }} />
            </Switch>
          <Footer/>
          </div>
      </Router>
    )
  }
}
module.exports = App;
