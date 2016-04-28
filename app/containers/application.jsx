import React from 'react';
import Helmet from 'react-helmet';
import Application from 'components/application';
import { index } from 'data/meta';

export default class ApplicationContainer extends React.Component {
	static propTypes = {
		children: React.PropTypes.node,
		location: React.PropTypes.object,
	}

	componentWillMount() {
		this.setState({
			active: false,
			mounted: false,
		});
	}

	componentDidMount() {
		this.setState({
			mounted: true,
		});

		if (window.location.hash === '#contacts') {
			this.openSidebar();
		}
	}

	openSidebar = (event) => {
		if (event) {
			event.stopPropagation();
		}

		this.setState({
			active: true,
			overflow: true,
		});

		window.location.hash = 'contacts';
		document.body.style.overflow = 'hidden';
	}

	closeSidebar = () => {
		if (!this.state.active) {
			return;
		}

		window.location.hash = '';

		this.setState({
			active: false,
		});

		setTimeout(() => {
			this.setState({
				overflow: false,
			});

			document.body.style.overflow = null;
		}, 500);
	}

	render() {
		return (
			<Application
				{...this.props}
				active={this.state.active}
				closeSidebar={this.closeSidebar}
				mounted={this.state.mounted}
				openSidebar={this.openSidebar}
				overflow={this.state.overflow}
			>
				<Helmet {...index} />
				{this.props.children}
			</Application>
		);
	}
}
