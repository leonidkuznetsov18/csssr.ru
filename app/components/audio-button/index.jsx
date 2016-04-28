import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

class AudioButton extends React.Component {

	static propTypes = {
		url: React.PropTypes.string.isRequired,
	}

	componentWillMount() {
		this.setState({
			active: false,
		});
	}

	handleClick = () => {
		const active = !this.state.active;

		this.setState({ active });

		if (active) {
			this.refs.audio.play();
		} else {
			this.refs.audio.pause();
			this.refs.audio.currentTime = 0;
		}
	}

	render() {
		const classes = cx({
			[styles.root]: true,
			[styles.root_active]: this.state.active,
		});

		return (
			<button
				className={classes}
				onClick={this.handleClick}
			>
				<audio
					preload
					ref='audio'
				>
					<source src={`/audio/${this.props.url}.ogg`} />
					<source src={`/audio/${this.props.url}.aac`} />
					<source src={`/audio/${this.props.url}.mp3`} />
				</audio>
			</button>
		);
	}
}

export default withStyles(AudioButton, styles);
