import React from 'react';
import cx from 'classnames';

import Circloader from 'components/circloader';

import './styles.css';

const url = {
	vk: 'http://vk.com/widget_community.php?app=0&width=218px&_ver=1&gid=57251439&mo…color3=5b7fa6&class_name=&height=208&url=http://csssr.ru/jobs/&14f61a3fc0a&mode=0',
	fb: 'http://www.facebook.com/v2.0/plugins/like_box.php?app_id=1410181009290722&channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FwjDNIDNrTQG.js%3Fversion%3D41%23cb%3Df163ffa30c%26domain%3Dcsssr.ru%26origin%3Dhttp%253A%252F%252Fcsssr.ru%252Ff2554570b%26relation%3Dparent.parent&color_scheme=light&container_width=300&header=false&height=400&href=https%3A%2F%2Fwww.facebook.com%2Fcsssr%2F&locale=ru_RU&sdk=joey&show_border=true&show_faces=true&stream=false&width=300',
	likebox: 'http://www.facebook.com/v2.0/plugins/like.php?action=like&app_id=1410181009290722&channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FwjDNIDNrTQG.js%3Fversion%3D41%23cb%3Df17b2ce2b%26domain%3Dcsssr.ru%26origin%3Dhttp%253A%252F%252Fcsssr.ru%252Ff415867dc%26relation%3Dparent.parent&container_width=76&href=https%3A%2F%2Fwww.facebook.com%2Fcsssr%2F&layout=box_count&locale=ru_RU&sdk=joey&share=true&show_faces=true',
	gp: 'https://apis.google.com/u/0/_/widget/render/page?usegapi=1&width=200&href=%2F%2Fplus.google.com%2Fu%2F0%2F115174886760731466206&showcoverphoto=false&rel=publisher&origin=http%3A%2F%2Fcsssr.ru&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.ru.nVeNIEOpMFg.O%2Fm%3D__features__%2Fam%3DAQ%2Frt%3Dj%2Fd%3D1%2Ft%3Dzcms%2Frs%3DAGLTcCP_XxdvEElA87pKgRdmYgB5Fkf6fQ#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I0_1447336104698&parent=http%3A%2F%2Fcsssr.ru&pfname=&rpctoken=41489604',
};

export default class Widget extends React.Component {
	static propTypes = {
		type: React.PropTypes.string.isRequired,
	}

	componentWillMount() {
		this.setState({
			active: false,
		});
	}

	onLoad = () => {
		this.setState({
			active: true,
		});
	}

	initTwitter() {
		window.twttr = (function (script, id) {
			const fjs = document.getElementsByTagName(script)[0];
			let js = document.getElementsByTagName(script)[0];
			let twitter = window.twttr || {};

			if (document.getElementById(id)) {
				return;
			}

			js = document.createElement(script);
			js.id = id;
			js.src = 'https://platform.twitter.com/widgets.js';
			fjs.parentNode.insertBefore(js, fjs);

			return window.twttr || (twitter = {
				_e: [],
				ready(f) {
					twitter._e.push(f);
				},
			});
		}('script', 'twitter-wjs'));

		window.twttr.ready((twttr) => {
			twttr.events.bind('rendered', () => {
				this.onLoad();
			});
		});
	}

	renderWidget() {
		return (
			<iframe
			className='widget__frame'
			scrolling='no'
			frameBorder='0'
			src={url[this.props.type]}
			onLoad={this.onLoad.bind(this)}
			{...this.props}/>
		);
	}

	renderTwitterWidget(className) {
		if (className !== 'widget widget_type_tw widget_state_active') {
			this.initTwitter();
		}

		return (
			<a className='twitter-timeline'
			href='https://twitter.com/csssr_dev'
			data-chrome='nofooter noheader noborder'
			data-tweet-limit='1'
			data-widget-id='705435656353398784'>
				Tweets by @csssr_dev
			</a>
		);
	}

	render() {
		const className = cx({
			widget: true,
			widget_type_vk: this.props.type === 'vk',
			widget_type_fb: this.props.type === 'fb',
			widget_type_likebox: this.props.type === 'likebox',
			widget_type_gp: this.props.type === 'gp',
			widget_type_tw: this.props.type === 'tw',
			widget_state_active: this.state.active,
		});

		return (
			<div className={className}>
				<div className='widget__loader'>
					<Circloader />
				</div>
				{(className !== 'widget widget_type_tw' && className !== 'widget widget_type_tw widget_state_active') ? this.renderWidget() : this.renderTwitterWidget(className)}
			</div>
		);
	}
}
