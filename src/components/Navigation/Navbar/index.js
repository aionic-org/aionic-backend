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
			<div className="container">
				<NavLink exact={true} to="/" className="navbar-brand">
					Aionic Backend
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
							<NavLink exact={true} to="/" className="nav-link">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact={true} to="/feed" className="nav-link">
								Feed
							</NavLink>
						</li>

						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								More
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link exact="true" to="/users" className="dropdown-item">
									<i className="fas fa-users fa-fw mr-2" />
									Users
								</Link>
								<Link exact="true" to="/applications" className="dropdown-item">
									<i className="fas fa-box fa-fw mr-2" />
									Applications
								</Link>
								<div className="dropdown-divider" />
								<h6 className="dropdown-header">Plugins</h6>
								<Link to="/plugins/github" className="dropdown-item">
									<i className="fab fa-github fa-fw mr-2" />
									GitHub
								</Link>
								<Link to="/plugins/gitlab" className="dropdown-item">
									<i className="fab fa-gitlab fa-fw mr-2" />
									GitLab
								</Link>
							</div>
						</li>
					</ul>

					<ul className="navbar-nav ml-auto">
						<li className="nav-item dropdown">
							<button
								type="button"
								className="btn btn-link nav-link dropdown-toggle font-weight-bold"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i className="fas fa-plus" /> Create
							</button>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown07">
								<Link to="/users?create=true" className="dropdown-item">
									<i className="fas fa-user fa-fw mr-2" />
									Create User
								</Link>
							</div>
						</li>
						<li className="nav-item dropdown">
							<button
								type="button"
								className="btn btn-link nav-link dropdown-toggle font-weight-bold"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i className="fas fa-user-circle" /> {Session.getUser().firstname}
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
			</div>
		</nav>
	);
};

export default Navbar;
