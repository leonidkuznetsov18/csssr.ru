import React from 'react';
import {connect} from 'react-redux';
import getPageMetadata from 'helpers/getPageMetadata';
import Application from 'components/application';

@connect((state) => ({
	router: state.router,
}))
export default class ApplicationContainer extends React.Component {
	static propTypes = {
		children: React.PropTypes.node,
		location: React.PropTypes.object,
	}

	setPageTitle() {
		const meta = getPageMetadata(this.props.location.pathname);
		document.title = meta.pageTitle;
	}

	openSidebar = (e) => {
		e.stopPropagation();
		this.setState({
			active: true,
			overflow: true,
		});

		document.body.style.overflow = 'hidden';
	}

	closeSidebar = () => {
		if (!this.state.active) {
			return
		}

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

	componentWillMount() {
		this.setState({
			active: false,
			mounted: false,
		});
	}

	componentDidMount() {
		this.setPageTitle();
		this.setState({
			mounted: true,
		});
	}

	componentDidUpdate() {
		this.setPageTitle();
	}

	render() {
		const meta = getPageMetadata(this.props.location.pathname);

		return (
			<Application
				{...this.props}
				meta={meta}
				active={this.state.active}
				overflow={this.state.overflow}
				mounted={this.state.mounted}
				openSidebar={this.openSidebar}
				closeSidebar={this.closeSidebar}
			/>
		);
	}
}
