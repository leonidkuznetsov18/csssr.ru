import React from 'react';
import cx from 'classnames';

import Circloader from 'components/circloader';

import './styles.css';

const url = {
	vk: "http://vk.com/widget_community.php?app=0&width=270px&_ver=1&gid=57251439&mo…color3=5b7fa6&class_name=&height=370&url=http://csssr.ru/jobs/&14f61a3fc0a",
	fb: "http://www.facebook.com/v2.0/plugins/like_box.php?app_id=1410181009290722&channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FwjDNIDNrTQG.js%3Fversion%3D41%23cb%3Df163ffa30c%26domain%3Dcsssr.ru%26origin%3Dhttp%253A%252F%252Fcsssr.ru%252Ff2554570b%26relation%3Dparent.parent&color_scheme=light&container_width=300&header=false&height=400&href=https%3A%2F%2Fwww.facebook.com%2Fcsssr%2F&locale=ru_RU&sdk=joey&show_border=true&show_faces=true&stream=false&width=300",
	gp: 'https://apis.google.com/u/0/_/widget/render/page?usegapi=1&width=200&href=%2F%2Fplus.google.com%2Fu%2F0%2F115174886760731466206&showcoverphoto=false&rel=publisher&origin=http%3A%2F%2Fcsssr.ru&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.ru.nVeNIEOpMFg.O%2Fm%3D__features__%2Fam%3DAQ%2Frt%3Dj%2Fd%3D1%2Ft%3Dzcms%2Frs%3DAGLTcCP_XxdvEElA87pKgRdmYgB5Fkf6fQ#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I0_1447336104698&parent=http%3A%2F%2Fcsssr.ru&pfname=&rpctoken=41489604',
	tw: 'http://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fcsssr_ru%2Fstatus%2F476815002968801282'
}

export default class VkGroup extends React.Component {
	componentWillMount() {
		this.setState({
			active: false
		});
	}

	onLoad = () => {
		this.setState({
			active: true
		});
	}

	render() {
		const className = cx({
			'widget': true,
			'widget_type_vk': this.props.type === 'vk',
			'widget_type_fb': this.props.type === 'fb',
			'widget_type_gp': this.props.type === 'gp',
			'widget_type_tw': this.props.type === 'tw',
			'widget_state_active': this.state.active
		});

		return (
			<div className={className}>
				<div className='widget__loader'>
					<Circloader />
				</div>
				<iframe
					className='widget__frame'
					scrolling='no'
					frameBorder='0'
					src={url[this.props.type]}
					onLoad={this.onLoad.bind(this)}
					{...this.props}
				/>
			</div>
		);
	}
}
