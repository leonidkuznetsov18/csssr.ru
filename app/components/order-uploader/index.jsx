import React from 'react';
import Link from 'components/link';
import UploadFilesBlock from 'components/order-upload-files-block';
import UploadFilesLink from 'components/order-upload-files-link';

import './styles.css';

export default class Uploader extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			active: 'files'
		};
	}


	render() {
		const {active} = this.state;
		return (
			<div className='uploader'>
				<div className='uploader__links'>
					<Link
						size='big'
						active={active === 'files'}
						onClick={() => this.setState({active: 'files'})}
					>макеты</Link>
					<Link
						size='big'
						active={active === 'link'}
						onClick={() => this.setState({active: 'link'})}
					>ссылка</Link>
				</div>
				{active === 'link' ? <UploadFilesLink {...this.props} /> : <UploadFilesBlock {...this.props} />}
			</div>
		);
	}
}
