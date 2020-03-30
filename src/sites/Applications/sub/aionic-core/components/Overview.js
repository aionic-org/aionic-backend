import React from 'react';

import { Widget } from 'aionic-library';

const SitesConfigAionicCoreOverview = () => {
	return (
		<div className="SitesConfigAionicCoreOverview">
			<div className="row">
				<div className="col-4">
					<Widget title="Online" icon="fas fa-server" iconBackground="#6c5ce7" margin={false} />
				</div>
				<div className="col-4">
					<Widget
						title={
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={process.env.REACT_APP_AIONIC_CORE_URL}
							>
								{process.env.REACT_APP_AIONIC_CORE_URL}
							</a>
						}
						icon="fas fa-cloud"
						iconBackground="#6c5ce7"
						margin={false}
					/>
				</div>
				<div className="col-4">
					<Widget
						title={
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/aionic-org/aionic-core"
							>
								Visit on GitHub
							</a>
						}
						icon="fab fa-github"
						iconBackground="#6c5ce7"
						margin={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default SitesConfigAionicCoreOverview;
