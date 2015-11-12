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

	componentDidMount() {
		this.setPageTitle();
	}

	componentWillReceiveProps() {
		this.setPageTitle();
	}

	render() {
		const meta = getPageMetadata(window.location.pathname);
		return (
			<Application meta={meta}>
				{this.props.children}
			</Application>
		);
	}
}
