import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Footer, Session } from 'aionic-library';

import Navbar from 'components/Navigation/Navbar';

import SitesSignin from './Signin';
import SitesRegister from './Register';

import SitesHome from './Home';

import SitesConfig from './Config';

import SitesConfigAionicCore from './Config/Aionic-Core';

import SitesConfigUsers from './Config/Users';
import SitesConfigUserContainer from './Config/Users/User/container';

import SitesConfigGitHubContainer from './Config/GitHub/container';

const Routes = () => {
	const AuthContainer = () => (
		<div className="authentication">
			<Route path="/signin" component={SitesSignin} />
			<Route path="/register/:hash" component={SitesRegister} />
		</div>
	);

	const DefaultContainer = () => (
		<div id="page-content-wrapper">
			<Navbar />
			<div className="container-fluid">
				<Switch>
					<Route exact path="/" component={SitesHome} />

					<Route exact path="/config" component={SitesConfig} />

					<Route exact path="/config/aionic-core" component={SitesConfigAionicCore} />

					<Route exact path="/config/users" component={SitesConfigUsers} />
					<Route exact path="/config/users/:id" component={SitesConfigUserContainer} />

					<Route exact path="/config/github" component={SitesConfigGitHubContainer} />

					<Route
						path="/signout"
						render={() => {
							Session.clearUser();
							return <Redirect to="/signin" />;
						}}
					/>
				</Switch>
			</div>
			<Footer />
		</div>
	);

	return (
		<Switch>
			<Route path="(/signin|/register.*)" component={AuthContainer} />
			<Route
				render={() =>
					Session.isLoggedIn() && Session.isAdmin() ? (
						<DefaultContainer />
					) : (
						<Redirect to="/signin" />
					)
				}
			/>
		</Switch>
	);
};

export default Routes;
