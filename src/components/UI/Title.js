import React from 'react';

const Title = (props) => {
	const { icon, title } = props;

	const titleIcon = icon ? <i className={`mr-2 ${icon}`} /> : null;

	return (
		<div className="Title">
			<h3>
				{titleIcon}
				{title}
			</h3>
			<hr className="featurette-divider mt-2 mb-4" />
		</div>
	);
};

Title.defaultProps = {
	icon: ''
};

export default Title;
