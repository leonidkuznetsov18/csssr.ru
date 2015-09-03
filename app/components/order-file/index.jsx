import React from 'react';

import './styles.css';

export default class File extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			progressWidth: 0,
			progressLineWidth: 0
		};
	}


	componentDidMount() {
		this._isMounted = true;
		this.setState({
			progressWidth: 190 - this.refs.name.getDOMNode().offsetWidth
		});
		this.tick(0);
	}


	componentWillUnmount() {
		this._isMounted = false;
	}


	// TODO: delete it. It is test for this.setProgress function
	tick(time) {
		if (time > 100) return;
		this.setProgress(time);
		return setTimeout(this.tick.bind(this, time + 1), 50);
	}

	// TODO: use the function while file uploads
	setProgress(value) {
		if (this._isMounted) {
			this.props.setGlobalProgress(value);
			this.setState({
				progressLineWidth: value + '%'
			});
		} else {
			this.props.setGlobalProgress(0, true);
		}
	}


	render() {
		const file = this.props.data;
		if (!file || !file.name) return <div>Error</div>
		const random = 'file_' + file.key;

		return (
			<div className={'file-place ' + random}>
				<div className='file-place__icon' />
				<div
					className='file-place__progress-complieted'
					ref='complieted'
				/>
				<div
					className={'file-place__name ' + random}
					ref='name'
				>{file.name}</div>
				<div
					className={'file-place__progress ' + random}
					style={{width: this.state.progressWidth}}
				>
					<div
						className={'file-place__progress-line ' + random}
						style={{width: this.state.progressLineWidth}}
					/>
				</div>
				<div
					className='file-place__close'
					onClick={this.props.delete.bind(null, file.key)}
				/>
			</div>
		);
	}
}
