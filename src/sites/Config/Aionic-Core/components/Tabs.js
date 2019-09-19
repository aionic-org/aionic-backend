import React from 'react';

import { Tabs, useTab } from 'aionic-library';

const SitesConfigAionicCoreTabs = () => {
	const [tab, changeTab] = useTab('General');

	const tabs = [{ name: 'General' }, { name: 'Caches' }, { name: 'Logs' }, { name: 'Support' }];

	let content = null;
	switch (tab) {
		case 'General':
			content = <p>General</p>;
			break;
		case 'Caches':
			content = <p>Caches</p>;
			break;
		case 'Support':
			content = <p>Support</p>;
			break;
		case 'Help':
			content = <p>Help</p>;
			break;
		default:
			break;
	}

	return (
		<div className="SitesConfigAionicCoreTabs">
			<Tabs tabs={tabs} handleClick={changeTab} preselectTabIdx={0} />
			<div className={`${content ? 'mt-3' : ''}`}>{content}</div>
		</div>
	);
};

export default SitesConfigAionicCoreTabs;
