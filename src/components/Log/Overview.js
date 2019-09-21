import React, { Component } from 'react';

import { Api, Spinner, Error, Button, InputSelect } from 'aionic-library';

import LogContent from './Content';

class LogOverview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: '',
			logfiles: [],
			logfileSelected: null
		};
	}

	componentDidMount = () => this.fetchLogfiles();

	fetchLogfiles = async () => {
		try {
			const logfiles = await Api.fetchData('config/logs');
			this.setState({
				isLoading: false,
				logfiles
			});
		} catch (err) {
			this.setState({
				isLoading: false,
				msg: Api.handleHttpError(err)
			});
		}
	};

	deleteLogfile = async () => {
		try {
			const { logfileSelected } = this.state;

			await Api.deleteData(`config/logs/${logfileSelected}`);
			const logfiles = await Api.fetchData('config/logs');

			this.setState({
				logfiles
			});
		} catch (err) {
			this.setState({
				msg: Api.handleHttpError(err)
			});
		}
	};

	downloadLogfile = async () => {
		const { logfileSelected } = this.state;
		await Api.downloadFile(`config/logs/${logfileSelected}/download`, logfileSelected);
	};

	handleLogChange = (e) => {
		const logfileSelected = e.target.value;
		this.setState({
			logfileSelected
		});
	};

	render() {
		const { isLoading, msg, logfiles, logfileSelected } = this.state;

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

		// Dropdown options
		const logfileList = logfiles.map((logfile) => {
			return { value: logfile, title: logfile };
		});

		return (
			<div className="LogOverview">
				<div className="row">
					<div className="col-4">
						<div className="form-group">
							<label>Logfiles:</label>
							<InputSelect
								name="cache-name"
								optionList={logfileList}
								onChange={this.handleLogChange}
							/>
						</div>
						{logfileSelected ? (
							<div>
								<Button
									label="Download"
									icon="fas fa-download"
									onClickHandler={this.downloadLogfile}
								/>
								<div className="ml-2 d-inline-block">
									<Button label="Delete" type="danger" onClickHandler={this.deleteLogfile} />
								</div>
							</div>
						) : null}
					</div>
					<div className="col-8">
						{logfileSelected ? <LogContent logfile={logfileSelected} /> : null}
					</div>
				</div>
			</div>
		);
	}
}

export default LogOverview;
