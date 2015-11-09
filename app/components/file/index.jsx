import React, {PropTypes} from 'react';
import cx from 'classnames';
import './styles.css';


export default class file extends React.Component {

	static propTypes = {
		type: PropTypes.oneOf(['doc', 'psd']).isRequired,
		filename: PropTypes.string,
		link: PropTypes.string,
		size: PropTypes.string,
		className: PropTypes.string,
		linkWidth: PropTypes.number
	}

	render() {
		const {type, filename, link, size, className, linkWidth} = this.props;

		const linkElement = link && filename ? (
			<a
				style={{width: linkWidth}}
				className='file__link'
				href={link}
				target='_blank'
			>{filename}</a>
		) : null;

		return (
			<div {...this.props} className={cx('file', className)}>
				<img src={require(`images/background/${type}.svg`)} />
				{linkElement}
				{size ? <div className='file__size'>{size}</div> : size}
			</div>
		);
	}
}