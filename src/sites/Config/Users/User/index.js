import React from 'react';

import { Session, Breadcrumbs, Button } from 'aionic-library';

import UserDetailsContainer from 'components/User/Details/container';
import Title from 'components/UI/Title';

const SitesConfigUser = (props) => {
	const { user, handleInputChange, deleteUser } = props;

	const breadcrumbs = [
		{ title: 'Home', link: '/' },
		{ title: 'Config', link: '/config' },
		{ title: 'Users', link: '/config/users' },
		{ title: `${user.firstname} ${user.lastname}` }
	];

	return (
		<div className="SitesConfigUser">
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<div className="page-content">
				<div className="row">
					<div className="col-12">
						<Title title={`${user.firstname} ${user.lastname}`} />
						<UserDetailsContainer user={user} handleInputChange={handleInputChange} />

						{Session.isAdmin() ? (
							<div className="float-right">
								<Button label="Delete" type="danger" onClickHandler={deleteUser} />
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SitesConfigUser;
