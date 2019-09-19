import React from 'react';

import { Widget } from 'aionic-library';

const SitesConfigOverview = () => {
	return (
		<div className="SitesConfigOverview">
			<div className="row mt-4">
				<div className="col-auto">
					<h4>Applications</h4>
				</div>
			</div>
			<div className="row">
				<div className="col-3">
					<Widget
						title="Aionic Core"
						icon="fas fa-box"
						iconBackground="#6c5ce7"
						link="/config/aionic-core"
					/>
				</div>
				<div className="col-3">
					<Widget
						title="Aionic Manager"
						icon="fas fa-box"
						iconBackground="#6c5ce7"
						link="/config/aionic-manager"
					/>
				</div>
				<div className="col-3">
					<Widget
						title="Aionic Milestone"
						icon="fas fa-box"
						iconBackground="#6c5ce7"
						link="/config/aionic-milestone"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-auto">
					<h4>Users</h4>
				</div>
			</div>
			<div className="row">
				<div className="col-3">
					<Widget title="Users" icon="fas fa-users" iconBackground="#00b894" link="/config/users" />
				</div>
			</div>
			<div className="row">
				<div className="col-auto">
					<h4>Plugins</h4>
				</div>
			</div>
			<div className="row">
				<div className="col-3">
					<Widget
						title="GitHub"
						icon="fab fa-github"
						iconBackground="#e17055"
						link="/config/github"
						margin={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default SitesConfigOverview;
