import React, {PropTypes} from 'react';
import cx from 'classnames';
import './styles.css';


export default class Quest extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		horison: PropTypes.bool
	}


	render() {
		return (
			<div className={cx('hr-quest', this.props.className)}>
				<img
					className={cx('hr-quest__scissors', {
						'hr-quest__scissors_horison': this.props.horison
					})}
					src={require('images/background/cut.svg')}
				/>
				{this.props.children}
			</div>
		);
	}
}
