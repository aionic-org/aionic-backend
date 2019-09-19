import React, { Component } from 'react';

import { Api } from 'aionic-library';

import SitesConfigGitHub from './index';

class SitesConfigGitHubContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: '',
			organizations: []
		};
	}

	componentDidMount = async () => {
		try {
			const organizations = await Api.fetchData('git/organization');
			this.setState({ isLoading: false, organizations });
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	addOrganization = (organization) => {
		this.setState((prevState) => {
			const organizations = prevState.organizations.slice();
			organizations.push(organization);

			return { organizations };
		});
	};

	removeOrganization = (organization) => {
		const organizationIdx = this.state.organizations.findIndex((org) => org.id === organization.id);

		if (organizationIdx >= 0) {
			this.setState((prevState) => {
				const organizations = prevState.organizations.slice();
				organizations.splice(organizationIdx, 1);

				return { organizations };
			});
		}
	};

	updateOrganization = (oldOrg, newOrg) => {
		const organizationIdx = this.state.organizations.findIndex((org) => org.id === oldOrg.id);

		if (organizationIdx >= 0) {
			this.setState((prevState) => {
				const organizations = prevState.organizations.slice();
				organizations[organizationIdx] = newOrg;

				return { organizations };
			});
		}
	};

	render() {
		return (
			<div className="SitesConfigGitHubContainer">
				<SitesConfigGitHub
					{...this.state}
					addOrganization={this.addOrganization}
					removeOrganization={this.removeOrganization}
					updateOrganization={this.updateOrganization}
				/>
			</div>
		);
	}
}

export default SitesConfigGitHubContainer;
