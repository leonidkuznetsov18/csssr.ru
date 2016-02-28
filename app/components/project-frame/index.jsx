import React from 'react';
import cx from 'classnames';
import Circloader from 'components/circloader';

import './styles.css';

export default class ProjectPage extends React.Component {
	static propTypes = {
		loaded: React.PropTypes.bool,
		url: React.PropTypes.string.isRequired,
		onLoad: React.PropTypes.func,
	}

	static defaultProps = {
		onLoad: () => {},
	}

	componentDidMount() {
		this.refs.iframe.addEventListener('load', this.props.onLoad);
	}


	render() {
		const { loaded, url } = this.props;
		const loaderClass = cx({
			'project-frame__loader': true,
			'project-frame__loader_active': !loaded,
		});
		const frameClass = cx({
			'project-frame__frame': true,
			'project-frame__frame_active': loaded,
		});

		return (
			<div className='project-frame'>
				<div className={loaderClass}>
					<Circloader size='big' color='white'/>
				</div>

				<iframe className={frameClass}
					ref='iframe'
					allowTransparency
					src={url}
					frameBorder='0'
				/>
			</div>
		);
	}
}
