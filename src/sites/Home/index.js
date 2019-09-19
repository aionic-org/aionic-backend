import React from 'react';

import { Breadcrumbs, Session } from 'aionic-library';

import Title from 'components/UI/Title';

const SitesHome = () => {
	const breadcrumbs = [{ title: 'Home' }];

	return (
		<div className="SitesHome">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="page-content">
				<Title title={`Welcome back, ${Session.getUser().firstname}!`} />
			</div>
		</div>
	);
};

export default SitesHome;
