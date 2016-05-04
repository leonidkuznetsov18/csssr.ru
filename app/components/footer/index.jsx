import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';
import Icon from 'components/icon';

import styles from './styles.css';

class Footer extends React.Component {
	render() {
		const paymentSystems = [
			'visa',
			'mastercard',
			'yandex',
			'paypal',
			'cashless',
		];

		return (
			<footer className={styles.root}>
				<div className={styles.inner}>
					<div className={styles.payment}>
						{paymentSystems.map((system) => (
							<span className={styles.paymentIcon}>
								<Icon
									icon={`payment/${system}`}
									key={system}
								/>
							</span>
						))}
					</div>
					<div className={styles.invite}>
						<span className={styles.invalid}>
							<Icon
								icon='invalid'
							/>
						</span>
						<Link
							className={styles.link}
							to='/jobs'
						>
							Приглашаем на работу
						</Link>
						{' '}
						людей с ограниченными возможностями
					</div>
					<div className={styles.links}>
						<a
							className={styles.link}
							href='http://csssrvice.reformal.ru/'
						>
							Отзывы и предложения
						</a>
						{' '}
						<a
							className={styles.link}
							href='http://blog.csssr.ru'
						>
							Блог трудового коллектива
						</a>
					</div>
					<div className={styles.copyright}>
						© 2011—{(new Date()).getFullYear()} «
						<Link
							className={styles.link}
							to='/'
						>
							CSSSR
						</Link>
						»
					</div>
				</div>
			</footer>
		);
	}
}

export default withStyles(Footer, styles);
