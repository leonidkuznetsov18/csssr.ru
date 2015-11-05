import React, {PropTypes}  from 'react';
import cx from 'classnames';

import './styles.css';

export default class AudioButton extends React.Component {

	static propTypes = {
		url: PropTypes.string.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {active: false};
	}

	click = () => {
		const active = !this.state.active;
		this.setState({active});

		if (active) {
			this.refs.audio.play();
		} else {
			this.refs.audio.pause();
			this.refs.audio.currentTime = 0;
		}
	}

	render() {
		const classes = cx('audio-button', {'audio-button_active': this.state.active});
		return(
			<button className={classes} onClick={this.click}>
				<audio preload ref='audio'>
					<source src={require(`file?limit=9999!media/audio/${this.props.url}.ogg`)}/>
					<source src={require(`file?limit=9999!media/audio/${this.props.url}.aac`)}/>
					<source src={require(`file?limit=9999!media/audio/${this.props.url}.mp3`)}/>
				</audio>
			</button>
		);
	}

};


