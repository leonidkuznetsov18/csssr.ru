import React from 'react';
import Head from 'components/head';
import YandexMetrika from 'components/yandex-metrika';
import FacebookPixel from 'components/facebook-pixel';

export default class Layout extends React.Component {
	static propTypes = {
		content: React.PropTypes.string,
		css: React.PropTypes.array,
		head: React.PropTypes.object,
		script: React.PropTypes.string,
		style: React.PropTypes.string,
	}

	static defaultProps = {
		css: [],
	}

	render() {
		return (
			<html>
				<Head head={this.props.head}>
					<style
						dangerouslySetInnerHTML={{
							__html: this.props.css.join(''),
						}}
					/>
				</Head>
				<body>
					<FacebookPixel id='524926190953458' />
					<div
						dangerouslySetInnerHTML={{
							__html: this.props.content,
						}}
						id='content'
					/>
					<script
						async
						defer
						src={this.props.script}
					/>
					<YandexMetrika />
				</body>
			</html>
		);
	}
}
