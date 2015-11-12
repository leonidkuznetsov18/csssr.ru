import React from 'react';
import {connect} from 'react-redux';
import getPageMetadata from 'helpers/getPageMetadata';
import Application from 'components/application';

@connect((state) => ({
	router: state.router
}))
export default class ApplicationContainer extends React.Component {
	setPageTitle() {
		const meta = getPageMetadata(window.location.pathname);
		document.title = meta.pageTitle;
	}

	openSidebar = (e) => {
		e.stopPropagation();
		this.setState({
			active: true
		});
	}

	closeSidebar = () => {
		this.setState({
			active: false
		});
	}

	componentWillMount() {
		this.setState({
			active: false
		})
	}

	componentDidMount() {
		this.setPageTitle();
	}

	componentWillReceiveProps() {
		this.setPageTitle();
	}

	render() {
		const meta = getPageMetadata(window.location.pathname);
		return (
			<Application
				meta={meta}
				active={this.state.active}
				openSidebar={this.openSidebar}
				closeSidebar={this.closeSidebar}
			>
				{this.props.children}
			</Application>
		);
	}
}
