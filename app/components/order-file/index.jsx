import React, {PropTypes} from 'react';

import './styles.css';

export default class File extends React.Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		progress: PropTypes.number.isRequired,
		remove: PropTypes.func
	}


	render() {
		const {name, id, progress, remove} = this.props;

		return (
			<div>
				{name} with id {id} <button onClick={remove}>x</button> --- {progress}%
			</div>
		);
	}
}
