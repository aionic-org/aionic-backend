import React from 'react';

import { Tabs, useTab } from 'aionic-library';

import CacheMetadata from 'components/Cache/Metadata';
import LogOverview from 'components/Log/Overview';

const SitesConfigAionicCoreTabs = () => {
	const [tab, changeTab] = useTab('General');

	const tabs = [{ name: 'General' }, { name: 'Cache' }, { name: 'Logs' }, { name: 'Support' }];

	let content = null;
	switch (tab) {
		case 'General':
			content = <p>General</p>;
			break;
		case 'Cache':
			content = <CacheMetadata />;
			break;
		case 'Logs':
			content = <LogOverview />;
			break;
		case 'Support':
			content = <p>Support</p>;
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
