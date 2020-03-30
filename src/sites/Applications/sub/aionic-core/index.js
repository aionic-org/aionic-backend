import React from 'react';

import { Breadcrumbs } from 'aionic-library';

import SitesApplicationsCoreOverview from './components/Overview';
import SitesApplicationsCoreTabs from './components/Tabs';

const SitesApplicationsCore = () => {
	const breadcrumbs = [{ title: 'Applications', link: '/applications' }, { title: 'Aionic Core' }];

	return (
		<div className="SitesApplicationsCore">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="page-content">
				<div className="row">
					<div className="col-12">
						<SitesApplicationsCoreOverview />
					</div>
				</div>
				<hr className="" />

				<div className="row">
					<div className="col-3">
						<div
							className="nav flex-column nav-pills"
							id="v-pills-tab"
							role="tablist"
							aria-orientation="vertical"
						>
							<a
								className="nav-link active"
								id="v-pills-home-tab"
								data-toggle="pill"
								href="#v-pills-home"
								role="tab"
								aria-controls="v-pills-home"
								aria-selected="true"
							>
								General
							</a>
							<a
								className="nav-link"
								id="v-pills-profile-tab"
								data-toggle="pill"
								href="#v-pills-profile"
								role="tab"
								aria-controls="v-pills-profile"
								aria-selected="false"
							>
								Logs
							</a>
							<a
								className="nav-link"
								id="v-pills-messages-tab"
								data-toggle="pill"
								href="#v-pills-messages"
								role="tab"
								aria-controls="v-pills-messages"
								aria-selected="false"
							>
								Cache
							</a>
							<a
								className="nav-link"
								id="v-pills-settings-tab"
								data-toggle="pill"
								href="#v-pills-settings"
								role="tab"
								aria-controls="v-pills-settings"
								aria-selected="false"
							>
								Support
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SitesApplicationsCore;
