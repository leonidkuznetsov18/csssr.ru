import React from 'react';
import Head from 'components/head';
import YM from 'components/yandex-metrika';

export default class Layout extends React.Component {
	static propTypes = {
		style: React.PropTypes.string,
		content: React.PropTypes.string,
		script: React.PropTypes.string,
		head: React.PropTypes.object,
		css: React.PropTypes.array,
	}

	static defaultProps = {
		css: [],
	}

	render() {
		return (
			<html>
				<Head head={this.props.head}>
					<style dangerouslySetInnerHTML={{
						__html: this.props.css.join(''),
					}} />
				</Head>
				<body>
					<div id='content' dangerouslySetInnerHTML={{
						__html: this.props.content,
					}} />
					<script src={this.props.script} async defer/>
					<YM />
				</body>
			</html>
		);
	}
}
