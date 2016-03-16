import React from 'react';
import { Link } from 'react-router';

import Title from 'components/title';
import Text from 'components/text';

import styles from './styles.css';

export default function History({ data }) {
	return (
		<div className={styles.root}>
			<Title size='medium'>
				<Link to='/timeline'>
					{data.title}
				</Link>
			</Title>
			{data.content.map((group, index) => (
				<div className={styles.item} key={index}>
					<p className={styles.date}>
						{group.date}
					</p>

					<Text size='m'>
						{group.text}
					</Text>
				</div>
			))}
		</div>
	);
}

History.propTypes = {
	data: React.PropTypes.object.isRequired,
};
