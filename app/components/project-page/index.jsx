import React from 'react';
import cx from 'classnames';
import Circloader from 'components/circloader';

import './styles.css';

const projects = require('data/portfolio.json').list;

export default class ProjectPage extends React.Component {
	static propTypes = {
		params: React.PropTypes.object.isRequired,
		children: React.PropTypes.element
	}

	componentWillMount() {
		this.setState({
			loaded: false
		});
		projects.forEach((project) => {
			if (project.view !== this.props.params.project) {
				return;
			}

			this.setState({
				project
			});
		});
	}

	componentDidMount() {
		const iframe = React.findDOMNode(this.refs.iframe);
		iframe.addEventListener('load', this.onIframeLoad);
	}

	componentWillReceiveProps() {
		this.setState({
			loaded: false
		});
	}

	onIframeLoad = () => {
		this.setState({
			loaded: true
		});
	}

	render() {
		const { params } = this.props;
		const { project } = this.state;
		const projectUrl = project.url || `http://portfolio.csssr.ru/${project.view}/`;
		const url = `${projectUrl}${params.page}.html`;
		const loaderClass = cx({
			'project-page__loader': true,
			'project-page__loader_active': !this.state.loaded
		});
		const frameClass = cx({
			'project-page__frame': true,
			'project-page__frame_active': this.state.loaded
		});

		return (
			<div className='project-page'>
				<div className={loaderClass}>
					<Circloader size='big' color='white'/>
				</div>

				<iframe className={frameClass}
					ref='iframe'
					allowTransparency
					src={url}
					frameBorder='0'
				/>
			</div>
		);
	}
}
