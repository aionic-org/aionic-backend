import React from 'react';

const SitesApplicationsIntroduction = () => (
	<div className="SitesApplicationsIntroduction">
		<div className="jumbotron" style={{ padding: '2rem' }}>
			<h1>Aionic Applications</h1>
			<p className="lead">
				Here you can find and configure all available Aionic applications. Note that apps you
				didn&apos;t install are listed here as well. You might need to restart them to apply all
				changes.
			</p>
			<hr className="my-4" />
			<p>To learn more about installing and setting up applications follow the link below.</p>
			<a
				className="btn btn-primary btn-lg"
				href="https://aionic.org"
				role="button"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn more
			</a>
		</div>
	</div>
);

export default SitesApplicationsIntroduction;
