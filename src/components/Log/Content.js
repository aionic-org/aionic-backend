import React, { Component } from 'react';

import { Api, Spinner, Error } from 'aionic-library';

class LogContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			msg: '',
			logContent: {}
		};
	}

	componentDidMount = () => this.fetchLogContent();

	componentDidUpdate(prevProps) {
		if (this.props.logfile !== prevProps.logfile) {
			this.fetchLogContent();
		}
	}

	fetchLogContent = async () => {
		try {
			const { logfile } = this.props;

			this.setState({ isLoading: true });

			const logContent = await Api.fetchData(`config/logs/${logfile}`);
			this.setState({
				isLoading: false,
				logContent
			});
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	render() {
		const { isLoading, msg, logContent } = this.state;

		if (isLoading) {
			return <Spinner showPadding={true} />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="LogContent">
				<textarea className="form-control" rows={20} defaultValue={logContent} />
			</div>
		);
	}
}

export default LogContent;
