import React from 'react';

import { Error, Spinner, Breadcrumbs } from 'aionic-library';

import GitOrganizationForm from 'components/Git/Organization/Form';
import GitOrganizationPreview from 'components/Git/Organization/Preview';

import Title from 'components/UI/Title';

const SitesConfigGitHub = (props) => {
	const {
		isLoading,
		msg,
		organizations,
		addOrganization,
		removeOrganization,
		updateOrganization
	} = props;

	const breadcrumbs = [
		{ title: 'Home', link: '/' },
		{ title: 'Config', link: '/config' },
		{ title: 'GitHub' }
	];

	let fetchedContent = null;
	if (isLoading) {
		fetchedContent = <Spinner showPadding={true} />;
	} else if (msg) {
		fetchedContent = <Error message={msg} />;
	} else {
		fetchedContent = (
			<div className="card-list">
				{organizations.map((organization) => (
					<GitOrganizationPreview
						org={organization}
						handleDelete={removeOrganization}
						handleSync={updateOrganization}
					/>
				))}
			</div>
		);
	}

	return (
		<div className="SitesConfigGitHub">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="page-content">
				<div className="row">
					<div className="col-12">
						<Title title="GitHub" icon="fab fa-github" />
						<div className="row">
							<div className="col-5">
								<p className="mb-4">
									Here you can manage your GitHub organizations. Other Aionic applications like
									Aionic-Milestone for example can access an organization&apos;s repositories and
									branches.
								</p>
								<GitOrganizationForm updateParent={addOrganization} />
							</div>
							<div className="col-7">{fetchedContent}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SitesConfigGitHub;
