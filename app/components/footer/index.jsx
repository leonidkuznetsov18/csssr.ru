import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/icon';
import './styles.css';

export default class Footer extends React.Component {
	render() {
		const paymentSystems = [
			'visa',
			'mastercard',
			'yandex',
			'paypal',
			'cashless'
		];

		return (
			<footer className='footer'>
				<div className='footer__inner'>
					<div className='footer__payment'>
						{paymentSystems.map(system => (
							<Icon
								className='footer__payment-icon'
								icon={`payment/${system}`}
								key={system}
							/>
						))}
					</div>
					<div className='footer__invite'>
						<Icon
							icon='invalid'
							className='footer__invalid'
						/>
						<Link
							className='footer__link'
							to='/jobs'
						>
							Приглашаем на работу
						</Link>
						{' '}
						людей с ограниченными возможностями
					</div>
					<div className='footer__links'>
						<Link
							className='footer__link'
							to='http://csssrvice.reformal.ru/'
						>
							Отзывы и предложения
						</Link>
						{' '}
						<Link
							className='footer__link'
							to='http://blog.csssr.ru'
						>
							Блог трудового коллектива
						</Link>
					</div>
					<div className='footer__copyright'>
						© 2011—2015 «
						<Link
							className='footer__link'
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
