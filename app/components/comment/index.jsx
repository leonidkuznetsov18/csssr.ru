import React from 'react';
import Text from 'components/text';

import './styles.css';

export default function Comment({author, company, url, text}) {
	return (
		<div className='comment'>
			<div className='comment__header'>
				<a className='comment__link' href={url}>
					{author}
				</a>
				, {company}
			</div>
			<Text size='xs'>
				{text}
			</Text>
		</div>
	);
}
