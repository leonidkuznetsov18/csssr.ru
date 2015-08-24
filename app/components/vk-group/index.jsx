import React from 'react';
import cx from 'classnames';

import Circloader from 'components/circloader';

import './styles.css';

export default class VkGroup extends React.Component {
	constructor() {
		super();

		this.state = {
			active: false
		};
	}

	onLoad() {
		this.setState({active: true});
	}

	render() {
		const src = [
			'http://vk.com/widget_community.php?app=0',
			'width=270px',
			'_ver=1',
			'gid=57251439',
			'mode=0',
			'color1=ffffff',
			'color2=2b587a',
			'color3=5b7fa6',
			'class_name=',
			'height=402',
			'url=http://csssr.ru/jobs/',
			'14f61a3fc0a'
		].join('&');

		const className = cx({
			'vk-group': true,
			'vk-group_state_active': this.state.active
		});

		return (
			<div className={className}>
				<div className='vk-group__loader'>
					<Circloader />
				</div>
				<iframe
					className='vk-group__widget'
					width='270'
					height='402'
					scrolling='no'
					frameborder='0'
					src={src}
					onLoad={this.onLoad.bind(this)}
					{...this.props}
				/>
			</div>
		);
	}
}
