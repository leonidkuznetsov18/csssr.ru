import React, {PropTypes} from 'react';

import './styles.css';

export default class File extends React.Component {

	static propTypes = {
		data: PropTypes.object,
		setGlobalProgress: PropTypes.func,
		delete: PropTypes.func
	}


	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
			progressBarWidth: 0
		};
	}


	componentDidMount() {
		this.isMounted = true;
		this.setState({
			progressBarWidth: 190 - this.refs.name.getDOMNode().offsetWidth
		});
		this.tick(0);
	}


	componentWillUnmount() {
		this.isMounted = false;
	}


	// TODO: delete it. It is test for this.setProgress function
	tick(time) {
		if (time > 100) return;
		this.setProgress(time);
		setTimeout(this.tick.bind(this, time + 1), 50);
		return;
	}

	// TODO: use the function while file uploads
	setProgress(value) {
		if (this.isMounted) {
			this.props.setGlobalProgress(value);
			this.setState({
				progress: value
			});
		} else {
			this.props.setGlobalProgress(0, true);
		}
	}


	render() {
		const file = this.props.data;
		if (!file || !file.name) return <div>Error</div>;
		const random = 'file_' + file.key;

		return (
			<div className={'file-place ' + random}>
				<div className='file-place__icon' />
				{
					this.state.progress !== 100 ? '' : (
						<div
							className='file-place__progress-complieted'
							style={{width: this.state.progressBarWidth}}
						/>
					)
				}
				<div
					className={'file-place__name ' + random}
					ref='name'
				>{file.name}</div>
				{
					this.state.progress === 100 ? '' : (
						<div
							className={'file-place__progress ' + random}
							style={{width: this.state.progressBarWidth}}
						>
							<div
								className={'file-place__progress-line ' + random}
								style={{width: this.state.progress + '%'}}
							/>
						</div>
					)
				}
				<div
					className='file-place__close'
					onClick={this.props.delete.bind(null, file.key)}
				/>
			</div>
		);
	}
}
