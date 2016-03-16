import React from 'react';
import Button from 'components/button';
import Text from 'components/text';
import { Link } from 'react-router';

import styles from './styles.css';

export default function Service({ service }) {
	return (
		<div className={styles.root}>
			<Link className={styles.title} to={service.link}>
				{service.title}
			</Link>

			<h4
				className={styles.subtitle}
				dangerouslySetInnerHTML={{ __html: service.subtitle }}
			/>

			<Button to={service.link} component={Link}>
				{service.linkText}
			</Button>

			<div className={styles.text}>
				<Text size='s' color='grey'>
					{service.description}
				</Text>
			</div>
		</div>
	);
}

Service.propTypes = {
	service: React.PropTypes.object,
};
