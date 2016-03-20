import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import Link from 'components/link';
import UploaderDropzone from 'components/uploader-dropzone';
import UploaderField from 'components/uploader-field';
import UploaderFiles from 'components/uploader-files';

import styles from './styles.css';

class Uploader extends React.Component {
	componentWillMount() {
		this.setState({
			active: 'files',
		});
	}

	setActive = (type) => () => {
		this.setState({
			active: type,
		});
	}

	render() {
		const { active } = this.state;
		const sectionClass = (isActive) => {
			return cx({
				[styles.section]: true,
				[styles.section_active]: isActive,
			});
		};

		return (
			<div className={styles.root}>
				<div className={styles.links}>
					<span className={styles.link}>
						<Link
							size='big'
							active={active === 'files'}
							onClick={this.setActive('files')}
						>
							макеты
						</Link>
					</span>
					<span className={styles.link}>
						<Link
							size='big'
							active={active === 'link'}
							onClick={this.setActive('link')}
						>
							ссылка
						</Link>
					</span>
				</div>

				<div className={sectionClass(active === 'link')}>
					<UploaderField {...this.props} />
				</div>

				<div className={sectionClass(active === 'files')}>
					<UploaderDropzone {...this.props} />
				</div>

				<UploaderFiles {...this.props} />
			</div>
		);
	}
}

export default withStyles(Uploader, styles);
