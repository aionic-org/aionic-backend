import React, { Component } from 'react';

import ReactJsonView from 'react-json-view';

import { Api, Spinner, Error } from 'aionic-library';

class CacheContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			msg: '',
			cacheContent: {}
		};
	}

	componentDidMount = () => this.fetchCacheContent();

	componentDidUpdate(prevProps) {
		if (this.props.cacheKey !== prevProps.cacheKey) {
			this.fetchCacheContent();
		}
	}

	fetchCacheContent = async () => {
		try {
			const { cacheKey } = this.props;

			this.setState({ isLoading: true });

			const cacheContent = await Api.fetchData(`config/caches/${cacheKey}`);
			this.setState({
				isLoading: false,
				cacheContent
			});
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	render() {
		const { isLoading, msg, cacheContent } = this.state;
		const { cacheKey } = this.props;

		if (isLoading) {
			return <Spinner showPadding={true} />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="CacheContent">
				<h4 className="mb-3">{cacheKey}</h4>
				<ReactJsonView src={cacheContent} />
			</div>
		);
	}
}

export default CacheContent;
