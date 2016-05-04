import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Title from 'components/title';
import Text from 'components/text';

import styles from './styles.css';

function Error(props) {
	return (
		<div className={styles.root}>
			<div className={styles.smile}>¯\_(ツ)_/¯</div>
			<Title size='large' center>Нам жаль, товарищ!</Title>
			<Text size='l' center>Ошибка {props.number}</Text>
		</div>
	);
}

Error.propTypes = {
	number: React.PropTypes.number,
};

export default withStyles(Error, styles);
