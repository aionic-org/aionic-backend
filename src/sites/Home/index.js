import React from 'react';

import { Breadcrumbs } from 'aionic-library';

const SitesHome = () => {
	const breadcrumbs = [{ title: 'Home' }];

	return (
		<div className="SitesHome">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
		</div>
	);
};

export default SitesHome;
