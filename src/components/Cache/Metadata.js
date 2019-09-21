import React, { Component } from 'react';

import { Api, Spinner, Error, Button, List, InputSelect } from 'aionic-library';

import CacheContent from './Content';

class CacheMetadata extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: '',
			cacheStats: {},
			cacheSelected: null
		};
	}

	componentDidMount = () => this.fetchCaches();

	fetchCaches = async () => {
		try {
			const cacheStats = await Api.fetchData('config/caches');
			this.setState({
				isLoading: false,
				cacheStats
			});
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	handleCacheChange = (e) => {
		const cacheSelected = e.target.value;
		this.setState({
			cacheSelected
		});
	};

	clearCaches = async () => {
		try {
			await Api.deleteData('config/caches');
			const cacheStats = await Api.fetchData('config/caches');

			this.setState({
				cacheStats
			});
		} catch (err) {
			this.setState({
				msg: Api.handleHttpError(err)
			});
		}
	};

	render() {
		const { isLoading, msg, cacheStats, cacheSelected } = this.state;

		if (isLoading) {
			return <Spinner showPadding={true} />;
		}

		if (msg) {
			return (
				<div className="UserForm">
					<Error message={msg} />
				</div>
			);
		}

		// List data
		const cacheStatsKeys = Object.keys(cacheStats.stats);
		const listElements = cacheStatsKeys.map((key) => {
			return { label: key, badge: cacheStats.stats[key] };
		});

		// Dropdown options
		const cacheKeys = cacheStats.keys.map((key) => {
			return { value: key, title: key };
		});

		return (
			<div className="CacheMetadata">
				<div className="row">
					<div className="col-4">
						<div className="form-group">
							<label>Cache Metadata:</label>
							<List elements={listElements} capitalize={true} />
						</div>
						<div className="form-group">
							<label>Cache Data:</label>
							<InputSelect
								name="cache-name"
								optionList={cacheKeys}
								onChange={this.handleCacheChange}
							/>
						</div>
						<Button
							label="Clear caches"
							type="danger"
							block={true}
							onClickHandler={this.clearCaches}
						/>
					</div>
					<div className="col-8">
						{cacheSelected ? <CacheContent cacheKey={cacheSelected} /> : null}
					</div>
				</div>
			</div>
		);
	}
}

export default CacheMetadata;
