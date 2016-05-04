import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import socialLink from 'helpers/socialLink';
import Row from 'components/row';
import Column from 'components/column';
import Title from 'components/title';
import Text from 'components/text';
import Icon from 'components/icon';

import styles from './styles.css';

const socials = ['vk', 'fb', 'tw', 'gp'];

function onButtonClick(type) {
	window.open(socialLink(type));
}

function Thanks() {
	return (
		<div className={styles.root}>
			<Row>
				<Column size={1 / 3}>
					<img
						className={styles.image}
						src={require('images/background/thanks.png')}
					/>
				</Column>

				<Column size={2 / 3}>
					<div className={styles.content}>
						<Title>
							Успех, товарищ!
						</Title>
						<Text>
							Ваша заявка успешно доставлена в CSSSR.
							Пока мы внимательно её изучаем, поделитесь
							вашей радостью с друзьями.
						</Text>
						<Text size='s'>
							Способы поделиться радостью с друзьями:

							{socials.map((social, index) => (
								<a
									key={index}
									className={styles.social}
									onClick={onButtonClick.bind(this, social)}
								>
									<Icon icon={`social-${social}`} />
								</a>
							))}
						</Text>
					</div>
				</Column>
			</Row>
		</div>
	);
}

Thanks.propTypes = {
	meta: React.PropTypes.object,
};

export default withStyles(Thanks, styles);
