import React from 'react';

import { Session, Breadcrumbs, Button } from 'aionic-library';

import UserDetailsContainer from 'components/User/Details/container';

const SitesConfigUser = (props) => {
	const { user, handleInputChange, deleteUser } = props;

	const breadcrumbs = [
		{ title: 'Users', link: '/users' },
		{ title: `${user.firstname} ${user.lastname}` }
	];

	return (
		<div className="SitesConfigUser">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="row">
				<div className="col-12">
					<UserDetailsContainer user={user} handleInputChange={handleInputChange} />
					{Session.isAdmin() ? (
						<div className="float-right">
							<Button label="Delete" type="danger" onClickHandler={deleteUser} />
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default SitesConfigUser;
