var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
	return (
		<ul className = 'nav'>
			<li className = 'navLink'>
				<NavLink exact activeClassName='active' to='/'>
					Introduction
				</NavLink>
			</li>
			<li className = 'navLink'>
				<NavLink activeClassName='active' to='/resume'>
					Resume
				</NavLink>
			</li>
		</ul>
	)
}

module.exports = Nav;
