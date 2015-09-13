import React from 'react';

import './styles.css';


export default class OutsourceFaqSingle extends React.Component {

	static propTypes = {
		title: React.PropTypes.string.isRequired,
		comment: React.PropTypes.string.isRequired,
		columns: React.PropTypes.array.isRequired
	}


	render() {
		const columns = this.props.columns.map((column, j) => {
			var result = [];
			const len = column.length;
			for (let i = 0; i < len; i++) {
				result.push(<h3 key={'title' + i}>{column[i].title}</h3>);

				let comments = column[i].comments;
				for (let k = 0, l = comments.length; k < l; k++) {
					result.push(
						<p key={'comment' + i + k} className='comment'>{comments[k]}</p>
					);
				}
			}


			return (
				<div key={j} className='outsource__faq__single__full-single__column'>
					{result}
				</div>
			);
		});

		return (
			<div className='outsource__faq__single'>

				<div className='outsource__faq__single__short'>
					<h2>{this.props.title}</h2>
					<p className='comment'>{this.props.comment}</p>
				</div>

				<div className='outsource__faq__single__full'>
					<div className='outsource__faq__single__full-single'>
						{columns}
					</div>
				</div>

			</div>
		);
	}
}
