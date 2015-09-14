import React from 'react';
import Links from 'components/outsource-use-links';
import Tips from 'components/outsource-use-tips';


export default class OutsourceUseExamples extends React.Component {

	static propTypes = {
		tips: React.PropTypes.object
	}

	constructor(props) {
		super(props);
		this.state = {
			active: 'bank'
		};
	}


	setActive = (link) => {
		this.setState({
			active: link
		});
	}


	render() {
		const links = this.props.tips;

		return (
			<div style={{display: 'inline'}}>
				<Links
					links={links}
					activeLink={this.state.active}
					setActiveLink={this.setActive}
				/>
				<Tips data={links[this.state.active].tips} />
			</div>
		);
	}
}
