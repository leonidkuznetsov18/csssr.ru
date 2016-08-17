import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import Circloader from 'components/circloader';

import styles from './styles.css';

const url = {
	vk: 'http://vk.com/widget_community.php?app=0&width=288px&_ver=1&gid=57251439&mo…color3=5b7fa6&class_name=&height=218&url=http://csssr.ru/jobs/&14f61a3fc0a&mode=0',
	fb: 'http://www.facebook.com/v2.5/plugins/like_box.php?app_id=1410181009290722&channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FwjDNIDNrTQG.js%3Fversion%3D41%23cb%3Df163ffa30c%26domain%3Dcsssr.ru%26origin%3Dhttp%253A%252F%252Fcsssr.ru%252Ff2554570b%26relation%3Dparent.parent&color_scheme=light&container_width=300&header=false&height=400&href=https%3A%2F%2Fwww.facebook.com%2Fcsssr%2F&locale=ru_RU&sdk=joey&show_border=true&show_faces=true&stream=false&width=300',
	likebox: 'https://www.facebook.com/v2.5/plugins/like.php?app_id=113869198637480&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D42%23cb%3Df212ff088d8c26c%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff3d398070e3f1e8%26relation%3Dparent.parent&container_width=613&href=https%3A%2F%2Fwww.facebook.com%2Fcsssr&layout=box_count&locale=ru_RU&sdk=joey&share=true&show_faces=true&width=80',
	tw: 'https://twitter.com/csssr_dev',
};

export class Widget extends React.Component {
	static propTypes = {
		type: React.PropTypes.string.isRequired,
	}

	componentWillMount() {
		this.setState({
			active: false,
		});
	}

	componentDidMount() {
		if (this.props.type === 'tw') {
			this.initTwitter();
		}
	}

	handleLoad = () => {
		this.setState({
			active: true,
		});
	}

	initTwitter() {
		if (window.twttr) {
			return;
		}

		window.twttr = {
			_e: [],
			ready(f) {
				window.twttr._e.push(f); // eslint-disable-line no-underscore-dangle
			},
		};

		const id = 'twitter-wjs';
		const fjs = document.getElementsByTagName('script')[0];

		if (document.getElementById(id)) {
			return;
		}

		const js = document.createElement('script');
		js.id = id;
		js.src = 'https://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js, fjs);

		window.twttr.ready((twttr) => {
			twttr.events.bind('rendered', () => {
				this.handleLoad();
			});
		});
	}

	renderWidget() {
		return (
			<iframe
				className={styles.frame}
				frameBorder='0'
				onLoad={this.handleLoad}
				scrolling='no'
				src={url[this.props.type]}
				{...this.props}
			/>
		);
	}

	renderTwitterWidget() {
		return (
			<a
				className='twitter-timeline'
				data-chrome='nofooter noheader noborders'
				data-tweet-limit='1'
				data-widget-id='705435656353398784'
				href={url[this.props.type]}
			>
				Tweets by @csssr_dev
			</a>
		);
	}

	render() {
		if (!this.props.type || !url[this.props.type]) {
			return null;
		}

		const className = cx({
			[styles.root]: true,
			[styles.root_type_vk]: this.props.type === 'vk',
			[styles.root_type_fb]: this.props.type === 'fb',
			[styles.root_type_likebox]: this.props.type === 'likebox',
			[styles.root_type_gp]: this.props.type === 'gp',
			[styles.root_type_tw]: this.props.type === 'tw',
			[styles.root_state_active]: this.state.active,
		});

		return (
			<div className={className}>
				<div className={styles.loader}>
					<Circloader />
				</div>
				{this.props.type !== 'tw' ? this.renderWidget() : this.renderTwitterWidget()}
			</div>
		);
	}
}

export default withStyles(Widget, styles);
