import React, {PropTypes} from 'react';

import './styles.css';

export default class File extends React.Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		progress: PropTypes.number.isRequired,
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
		this.mounted = true;
		this.setState({
			progressBarWidth: 190 - this.refs.name.offsetWidth
		});
	}


	componentWillUnmount() {
		this.mounted = false;
	}


	// TODO: use the function while file uploads
	setProgress(value) {
		if (this.mounted) {
			this.props.setGlobalProgress(value);
			this.setState({
				progress: value
			});
		} else {
			this.props.setGlobalProgress(0, true);
		}
	}


	shouldComponentUpdate(nextProps) {
		if (this.props.name !== nextProps.name ||
				this.props.id !== nextProps.id ||
				this.props.setGlobalProgress !== nextProps.setGlobalProgress ||
				this.props.delete !== nextProps.delete) {
			if (this.props.progress !== nextProps.progress) {
				this.setProgress(nextProps.progress);
			}
			return true;
		}
		return false;
	}


	render() {
		const {name, id} = this.props;
		if (!name) return <span>Error</span>;
		const random = 'file_' + id;

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
				>{name}</div>
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
					onClick={this.props.delete.bind(null, id)}
				/>
			</div>
		);
	}
}
