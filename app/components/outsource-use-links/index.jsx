import React from 'react';

import './styles.css';


export default class OutsourceUseLinks extends React.Component {

	static propTypes = {
		links: React.PropTypes.object,
		activeLink: React.PropTypes.string,
		setActiveLink: React.PropTypes.func
	}


	getClassList = (link) => {
		return 'outsource-use__link js-outsource-use-link ' +
			(this.props.activeLink === link ? 'outsource-use__link_active' : '');
	}


	render() {

		let links = [];

		for (let linkKey in this.props.links) {
			const link = this.props.links[linkKey];
			links.push(
				<a
					key={linkKey}
					className={this.getClassList(linkKey)}
					onClick={this.props.setActiveLink.bind(null, linkKey)}
				>
					<div className='outsource-use__link-text'>{link.text}</div>
				</a>
			);
		}

		return (
			<div
				id='outsourceUseLinks'
				className='outsource-use__links'
			>
			{links}
			</div>
		);
	}
}
