import React from 'react';
import FormUploadType from 'components/order-upload-type';
import UploadFilesBlock from 'components/order-upload-files-block';
import UploadFilesLink from 'components/order-upload-files-link';

import './styles.css';

export default class Uploader extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeBlock: props.initialActiveBlock || 'files'
		};
	}


	setActiveBlock(newBlock) {
		this.setState({
			activeBlock: newBlock
		});
	}


	render() {
		const activeBlock = ((active) => {
			if (active === 'link')
				return <UploadFilesLink />;
			else // default active is 'files'
				return <UploadFilesBlock />;
		})(this.state.activeBlock);

		return (
			<div className='order__main__content__upload'>
				<FormUploadType
					active={this.state.activeBlock}
					setActive={this.setActiveBlock.bind(this)}
					/>
				{activeBlock}
			</div>
		);
	}
}
