import React from 'react';
import cx from 'classnames';

import Link from 'components/link';
import UploaderDropzone from 'components/uploader-dropzone';
import UploaderField from 'components/uploader-field';
import FilesBlock from 'components/uploader-files';

import './styles.css';

export default class Uploader extends React.Component {
	componentWillMount() {
		this.setState({
			active: 'files',
		});
	}

	render() {
		const {active} = this.state;
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
							onClick={() => this.setState({active: 'files'})}
						>
							макеты
						</Link>
					</span>
					<span className='uploader__link'>
						<Link
							size='big'
							active={active === 'link'}
							onClick={() => this.setState({active: 'link'})}
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

				<FilesBlock {...this.props} />
			</div>
		);
	}
}
