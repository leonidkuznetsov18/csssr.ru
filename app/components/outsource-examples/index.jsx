import React from 'react';
import cx from 'classnames';

import SectionGroup from 'components/section-group';

import './styles.css';

export default class OutsourceExamples extends React.Component {
	static propTypes = {
		tips: React.PropTypes.object,
	}

	componentWillMount() {
		this.setState({
			active: 'bank',
		});
	}

	setActive = (link) => {
		this.setState({
			active: link,
		});
	}

	render() {
		const links = this.props.tips;

		return (
			<div className='outsource-examples'>
				<div className='outsource-examples__links'>
					{Object.keys(links).map((link) => {
						const linkClass = cx({
							'outsource-examples__link': true,
							'outsource-examples__link_active': this.state.active === link,
						});

						return (
							<a
								key={link}
								className={linkClass}
								onClick={() => this.setActive(link)}
							>
								<span className='outsource-examples__link-text'>
									{links[link].text}
								</span>
							</a>
						);
					})}
				</div>

				<div className='outsource-examples__tab'>
					{Object.keys(links).map((link) => {
						const sectionClass = cx({
							'outsource-examples__content': true,
							'outsource-examples__content_active': this.state.active === link,
						});

						return (
							<div className={sectionClass} key={link}>
								<SectionGroup data={links[link].tips}/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
