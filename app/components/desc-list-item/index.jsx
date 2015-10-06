import React, {PropTypes} from 'react';
import cx from 'classnames';
import './styles.css';


export default class DescriptionListItem extends React.Component {

	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string
	}

	render() {
		return (
			<li {...this.props} className={cx(this.props.className, 'desc-list__item')}>
				{this.props.children}
			</li>
		);
	}
}
