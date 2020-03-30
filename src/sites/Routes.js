import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Footer, Session } from 'aionic-library';

import Navbar from 'components/Navigation/Navbar';

import SitesSignin from './Signin';
import SitesRegister from './Register';

import SitesHome from './Home';

import SitesApplications from './Applications';
import SitesApplicationsCore from './Applications/sub/aionic-core';

import SitesUsers from './Users';
import SitesUserContainer from './Users/User/container';

import SitesPluginsGitHubContainer from './Plugins/sub/GitHub/container';

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
			<div className="container">
				<Switch>
					<Route exact path="/" component={SitesHome} />

					<Route exact path="/applications" component={SitesApplications} />
					<Route exact path="/applications/aionic-backend" component={null} />
					<Route exact path="/applications/aionic-core" component={SitesApplicationsCore} />
					<Route exact path="/applications/aionic-milestone" component={null} />

					<Route exact path="/users" component={SitesUsers} />
					<Route exact path="/users/:id" component={SitesUserContainer} />

					<Route exact path="/plugins/github" component={SitesPluginsGitHubContainer} />

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
