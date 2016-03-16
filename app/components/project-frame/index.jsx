import React from 'react';
import cx from 'classnames';
import Circloader from 'components/circloader';

import styles from './styles.css';

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
			[styles.loader]: true,
			[styles.loader_active]: !loaded,
		});
		const frameClass = cx({
			[styles.frame]: true,
			[styles.frame_active]: loaded,
		});

		return (
			<div className={styles.root}>
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
