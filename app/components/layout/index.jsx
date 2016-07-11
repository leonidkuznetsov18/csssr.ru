import React from 'react';
import Head from 'components/head';
import YandexMetrika from 'components/yandex-metrika';

export default class Layout extends React.Component {
	static propTypes = {
		content: React.PropTypes.string,
		css: React.PropTypes.array,
		head: React.PropTypes.object,
		script: React.PropTypes.string,
		state: React.PropTypes.object,
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
					<div
						dangerouslySetInnerHTML={{
							__html: this.props.content,
						}}
						id='content'
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `var __INITIAL_STATE__ = ${JSON.stringify(this.props.state)}`,
						}}
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
