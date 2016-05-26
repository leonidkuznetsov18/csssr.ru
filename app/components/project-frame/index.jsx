import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import Circloader from 'components/circloader';

import styles from './styles.css';

class ProjectFrame extends React.Component {
	static propTypes = {
		loaded: React.PropTypes.bool,
		onLoad: React.PropTypes.func,
		url: React.PropTypes.string.isRequired,
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
					<Circloader color='white' size='big' />
				</div>

				<iframe
					allowTransparency
					className={frameClass}
					frameBorder='0'
					ref='iframe'
					src={url}
				/>
			</div>
		);
	}
}

export default withStyles(ProjectFrame, styles);
