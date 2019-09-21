import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import ReactModal from 'react-modal';
import queryString from 'query-string';

import { Button } from 'aionic-library';

import UserForm from './Form';

const UserCreate = (props) => {
	const { location } = props;

	const { create } = queryString.parse(location.search);
	const [showModal, setShowModal] = useState(create === 'true'); // query param is of type string

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div className="UserCreate">
			<div className="form-group">
				<Button label="Create" icon="fas fa-plus" block={true} onClickHandler={openModal} />
			</div>

			<ReactModal
				isOpen={showModal}
				contentLabel="Minimal Modal Example"
				className="Modal"
				overlayClassName="Modal-Overlay"
			>
				<div className="modal-header">
					<h5 className="modal-title">Create new user</h5>
					<button type="button" className="close" aria-label="Close" onClick={closeModal}>
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div className="modal-body">
					<UserForm />
				</div>
			</ReactModal>
		</div>
	);
};

export default withRouter(UserCreate);
