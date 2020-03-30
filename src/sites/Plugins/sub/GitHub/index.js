import React from 'react';

import { Error, Spinner, Breadcrumbs } from 'aionic-library';

import GitOrganizationForm from 'components/Git/Organization/Form';
import GitOrganizationPreview from 'components/Git/Organization/Preview';

const SitesPluginsGitHub = (props) => {
	const {
		isLoading,
		msg,
		organizations,
		addOrganization,
		removeOrganization,
		updateOrganization
	} = props;

	const breadcrumbs = [{ title: 'Plugins', link: '/plugins' }, { title: 'GitHub' }];

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
						key={organization.id}
					/>
				))}
			</div>
		);
	}

	return (
		<div className="SitesPluginsGitHub">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="page-content">
				<div className="row">
					<div className="col-12">
						<div className="row">
							<div className="col-8">{fetchedContent}</div>
							<div className="col-4">
								<GitOrganizationForm updateParent={addOrganization} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SitesPluginsGitHub;
