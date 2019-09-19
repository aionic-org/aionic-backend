import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.scss';

import { Session } from 'aionic-library';

const Navbar = () => {
	const toggleFullscreen = () => {
		if (
			!document.fullscreenElement &&
			!document.mozFullScreenElement &&
			!document.webkitFullscreenElement
		) {
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<NavLink exact to="/" className="navbar-brand">
				Aionic - Manager
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink exact to="/" className="nav-link">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/config" className="nav-link">
							Config
						</NavLink>
					</li>
				</ul>

				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown">
						<button
							type="button"
							className="btn btn-link nav-link dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<i className="fas fa-user-tie mr-1" /> {Session.getUser().firstname}
						</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
							<div className="dropdown-header">
								{`${Session.getUser().firstname} ${Session.getUser().lastname}`}
							</div>
							<Link to="/users/me" className="dropdown-item">
								<i className="far fa-user-circle fa-fw mr-2" />
								Account
							</Link>
							<button type="button" className="btn dropdown-item" onClick={toggleFullscreen}>
								<i className="fas fa-compress fa-fw mr-2" /> Toggle Fullscreen
							</button>
							<div className="dropdown-divider" />
							<Link to="/signout" className="dropdown-item text-danger">
								<i className="fas fa-sign-out-alt fa-fw mr-2" /> Signout
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
