import React from 'react';

import { Breadcrumbs, Spinner, Error, useFetcher } from 'aionic-library';

import Title from 'components/UI/Title';

import UserCreate from 'components/User/Create';
import UserTable from 'components/User/Table';
import UserInvitation from 'components/User/Invitation';

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
					<div className="col-4">
						<p className="mb-4">
							Manage your Aionic users. Invite new users via e-mail or create new accounts directly.
						</p>
						<UserInvitation />
						<UserCreate />
					</div>
					<div className="col-8">
						<UserTable users={users} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SitesConfigUsers;
