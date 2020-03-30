import React from 'react';

import { Widget } from 'aionic-library';

const UsersWidgetbar = (props) => {
	const { users } = props;

	const admins = users.filter((user) => user.userRole.name === 'Admin');
	const usersInactive = users.filter((user) => !user.active);

	return (
		<div className="UsersWidgetbar">
			<div className="row">
				<div className="col-4">
					<Widget title={`Total: ${users.length}`} icon="fas fa-users" iconBackground="#00b894" />
				</div>
				<div className="col-4">
					<Widget
						title={`Admins: ${admins.length}`}
						icon="fas fa-user-tie"
						iconBackground="#00b894"
					/>
				</div>
				<div className="col-4">
					<Widget
						title={`Inactive: ${usersInactive.length}`}
						icon="fas fa-user-slash"
						iconBackground="#00b894"
					/>
				</div>
			</div>
		</div>
	);
};

export default UsersWidgetbar;
