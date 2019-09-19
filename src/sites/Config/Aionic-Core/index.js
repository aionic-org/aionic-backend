import React from 'react';

import { Breadcrumbs } from 'aionic-library';

import Title from 'components/UI/Title';

import SitesConfigAionicCoreOverview from './components/Overview';
import SitesConfigAionicCoreTabs from './components/Tabs';

const SitesConfigAionicCore = () => {
	const breadcrumbs = [
		{ title: 'Home', link: '/' },
		{ title: 'Config', link: '/config' },
		{ title: 'Aionic Core' }
	];

	return (
		<div className="SitesConfigAionicCore">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="page-content">
				<div className="row">
					<div className="col-12">
						<Title title="Aionic Core" icon="fas fa-box" />
						<SitesConfigAionicCoreOverview />
						<div className="row">
							<div className="col-12">
								<SitesConfigAionicCoreTabs />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SitesConfigAionicCore;
