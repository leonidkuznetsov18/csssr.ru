import React from 'react';
import cx from 'classnames';

import Link from 'components/link';
import UploaderDropzone from 'components/uploader-dropzone';
import UploaderField from 'components/uploader-field';
import UploaderFiles from 'components/uploader-files';

import './styles.css';

export default class Uploader extends React.Component {
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
				uploader__section: true,
				uploader__section_active: isActive,
			});
		};

		return (
			<div className='uploader'>
				<div className='uploader__links'>
					<span className='uploader__link'>
						<Link
							size='big'
							active={active === 'files'}
							onClick={this.setActive('files')}
						>
							макеты
						</Link>
					</span>
					<span className='uploader__link'>
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
