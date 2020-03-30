import React from 'react';

import { Breadcrumbs, Spinner, Error, useFetcher } from 'aionic-library';

import UserCreate from 'components/User/Create';
import UserTable from 'components/User/Table';
import UserInvitation from 'components/User/Invitation';

import UsersWidgetbar from './components/Widgetbar';

const SitesUsers = () => {
	const breadcrumbs = [{ title: 'Users' }];

	const [users, isLoading, error] = useFetcher('users');

	if (isLoading) {
		return <Spinner showPadding={true} />;
	}

	if (error) {
		return <Error message={error} />;
	}

	return (
		<div className="SitesUsers">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="page-content">
				<UsersWidgetbar users={users} />
				<div className="row">
					<div className="col-8">
						<UserTable users={users} />
					</div>
					<div className="col-4">
						<label>Create or invite a new user</label>
						<UserInvitation />
						<UserCreate />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SitesUsers;
