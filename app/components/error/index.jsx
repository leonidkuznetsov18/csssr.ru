import React from 'react';
import Title from 'components/title';
import Text from 'components/text';

import './styles.css';

export default function Error(props) {

	return (
		<div className='error'>
			<div className='error__smile'>¯\_(ツ)_/¯</div>
			<Title size='large' center>Нам жаль, товарищ!</Title>
			<Text size='l' center>Ошибка {props.number}</Text>
		</div>
	);
}

Error.propTypes = {
	number: React.PropTypes.number
};
