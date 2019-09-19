import React from 'react';

import { Breadcrumbs } from 'aionic-library';

import Title from 'components/UI/Title';

import SitesConfigOverview from './components/Overview';

const SitesConfig = () => {
	const breadcrumbs = [{ title: 'Home', link: '/' }, { title: 'Config' }];

	return (
		<div className="SitesConfig">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="page-content">
				<Title title="Config" />
				<SitesConfigOverview />
			</div>
		</div>
	);
};

export default SitesConfig;
