import React from 'react';
import Text from 'components/text';

import './styles.css';


export default class FaqSingle extends React.Component {

	static propTypes = {
		data: React.PropTypes.object
	}

	render() {
		const data = this.props.data;
		const columns = data.columns.map((column, j) => {
			var result = [];
			const len = column.length;
			for (let i = 0; i < len; i++) {
				result.push(<h3 key={'title' + j + i}>{column[i].title}</h3>);
				result.push(<Text key={'text' + j + i}>{column[i].text}</Text>);
			}

			return (
				<div className='order__faq__single__full-single__column' key={j}>
					{result}
				</div>
			);
		});


		let link;
		if (data.link && data.link.href && data.link.text) {
			link = (
				<a
					className='blue-link'
					href={data.link.href}
				>{data.link.text}</a>
			);
		}


		return (
			<div className='order__faq__single'>

				<div className='order__faq__single__short'>
					<div className='order__faq__single__short-img'>
						<img
							src={require(`../../images/order/faq/${this.props.data.image.file}.svg`)}
							alt={data.image.alt}
							width={data.image.width}
							height={data.image.height}
						/>
						{link}
					</div>
					<h2>{data.title}</h2>
					<p className='comment'>{data.comment}</p>
				</div>

				<div className='order__faq__single__full'>
					<div className='order__faq__single__full-single'>
						{columns}
					</div>
				</div>

			</div>
		);
	}

}
