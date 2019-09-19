import React from 'react';

import { Widget } from 'aionic-library';

const SitesConfigAionicCoreOverview = () => {
	return (
		<div className="SitesConfigAionicCoreOverview">
			<div className="row">
				<div className="col-4">
					<Widget title="ONLINE" icon="fas fa-server" iconBackground="#6c5ce7" />
				</div>
				<div className="col-4">
					<Widget
						title={
							<a target="_blank" rel="noopener noreferrer" href={process.env.REACT_APP_CORE_URL}>
								{process.env.REACT_APP_CORE_URL}
							</a>
						}
						icon="fas fa-at"
						iconBackground="#6c5ce7"
					/>
				</div>
				<div className="col-4">
					<Widget
						title={
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/Aionic-Apps/aionic-core"
							>
								Visit on GitHub
							</a>
						}
						icon="fab fa-github"
						iconBackground="#6c5ce7"
					/>
				</div>
			</div>
		</div>
	);
};

export default SitesConfigAionicCoreOverview;
