import React from 'react';

import { Breadcrumbs, Spinner, Error, useFetcher } from 'aionic-library';

import UserTable from 'components/User/Table';
import Title from 'components/UI/Title';
import UsersWidgetbar from './components/Widgetbar';

const SitesConfigUsers = () => {
	const breadcrumbs = [
		{ title: 'Home', link: '/' },
		{ title: 'Config', link: '/config' },
		{ title: 'Users' }
	];

	const [users, isLoading, error] = useFetcher('users');

	if (isLoading) {
		return <Spinner showPadding={true} />;
	}

	if (error) {
		return <Error message={error} />;
	}

	return (
		<div className="SitesConfigUsers">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="page-content">
				<Title title="Users" icon="fas fa-users" />
				<UsersWidgetbar users={users} />

				<div className="row">
					<div className="col-12">
						<UserTable users={users} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SitesConfigUsers;
