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
		});
	}

	closeSidebar = () => {
		this.setState({
			active: false,
		});
	}

	componentWillMount() {
		this.setState({
			active: false,
		});
	}

	componentDidMount() {
		this.setPageTitle();
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
				openSidebar={this.openSidebar}
				closeSidebar={this.closeSidebar}
			/>
		);
	}
}
