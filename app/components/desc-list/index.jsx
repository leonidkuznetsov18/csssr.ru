import React, {PropTypes} from 'react';
import cx from 'classnames';
import './styles.css';

export default class DescriptionList extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		className: PropTypes.string
	}

	render() {
		return (
			<ul {...this.props} className={cx(this.props.className, 'desc-list')}>
				{this.props.children}
			</ul>
		);
	}
}
