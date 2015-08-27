import React from 'react';
import OrderForm from 'components/order-form'

import './styles.css';

export default class OrderShort extends React.Component {
	render() {
		return (
			<div className='order__main__content'>
				<h1 className='order__main__content__title'>Вёрстка проекта в CSSSR</h1>
				<p className='order__main__content__desc'>Вы&nbsp;собираетесь заказать волшебное превращение макетов в&nbsp;шаблоны.</p>
				<p className='order__main__content__text comment'>
					Обратите внимание, что после получения заказа мы&nbsp;свяжемся с&nbsp;вами для уточнения нюансов.
					Пожалуйста, учитывайте, что для согласования всех условий заказа,
					а&nbsp;также расчёта стоимости и&nbsp;сроков выполнения проекта потребуется некоторое время.
				</p>
				<OrderForm />
			</div>
		);
	}
}

