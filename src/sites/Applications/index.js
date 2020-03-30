import React from 'react';

import { Breadcrumbs } from 'aionic-library';

import SitesApplicationsOverview from './components/Overview';
import SitesApplicationsIntroduction from './components/Introduction';

const SitesApplications = () => {
	const breadcrumbs = [{ title: 'Applications' }];

	// const breadcrumbs = [{ title: 'Home', link: '/' }, { title: 'Applications' }];

	return (
		<div className="SitesApplications">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<SitesApplicationsIntroduction />
			<SitesApplicationsOverview />
		</div>
	);
};

export default SitesApplications;
