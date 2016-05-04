import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import SectionGroup from 'components/section-group';

import styles from './styles.css';

class OutsourceExamples extends React.Component {
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
			<div className={styles.root}>
				<div className={styles.links}>
					{Object.keys(links).map((link) => {
						const linkClass = cx({
							[styles.link]: true,
							[styles.link_active]: this.state.active === link,
						});

						return (
							<a
								key={link}
								className={linkClass}
								onClick={() => this.setActive(link)}
							>
								<span className={styles.text}>
									{links[link].text}
								</span>
							</a>
						);
					})}
				</div>

				<div className={styles.tab}>
					{Object.keys(links).map((link) => {
						const sectionClass = cx({
							[styles.content]: true,
							[styles.content_active]: this.state.active === link,
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

export default withStyles(OutsourceExamples, styles);
