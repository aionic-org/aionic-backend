import React, { useState } from 'react';

import { Widget } from 'aionic-library';

const SitesApplicationsOverview = () => {
	const allApplications = [
		{ name: 'Aionic Backend', link: 'aionic-backend' },
		{ name: 'Aionic Core', link: 'aionic-core' },
		{ name: 'Aionic Milestone', link: 'aionic-milestone' }
	];

	const [applications, setApplications] = useState(allApplications);

	const filterApplications = (e) => {
		const apps = allApplications.filter((app) =>
			app.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setApplications(apps);
	};

	return (
		<div className="SitesApplicationsOverview">
			<div className="row">
				<div className="col-12">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
							placeholder="Filter applications"
							onChange={filterApplications}
						/>
					</div>
				</div>
			</div>
			<div className="row">
				{applications.map((app) => {
					return (
						<div className="col-4">
							<Widget
								title={app.name}
								icon="fas fa-box"
								iconBackground="#6c5ce7"
								link={`/applications/${app.link}`}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SitesApplicationsOverview;
