import React, { PropTypes } from 'react';
import Icon from 'components/icon';
import Title from 'components/title';
import Text from 'components/text';
import cx from 'classnames';
import { connect } from 'react-redux';
import './styles.css';

export default class Contacts extends React.Component {

	static propTypes = {
		active: PropTypes.bool,
		close: PropTypes.func,
		history: PropTypes.object
	}

	render() {
		let contactsClass = cx ({
				'contacts': true,
				'contacts_active': this.props.active
		});
		return (
			<div className={contactsClass}>
				<div className='contacts__close' onClick={this.props.close}/>
				<div className='contacts__header'>
					Уголок <br/>
					Развитого <br/>
					Socialisma
				</div>
				<div className='contacts__wrapper'>
				</div>
				<div className='contacts__info'>
					<Title size='small' color='black' component='h6'>Контактная информация</Title>
					<div className='contacts__text'>
						<Text size='xs' indent={false}>
							Рабочее время с 12-00 до 21-00, понедельник — пятница.
						</Text>
					</div>
					<div className='contacts__text'>
						<Text size='xs' indent={false}>
							Прием заказов <a href='sales@csssr.io' className='contacts__link'>sales@csssr.io</a>
						</Text>
					</div>
					<div className='contacts__text'>
						<Text size='xs' indent={false}>
							Вопросы трудоустройства <a href='hr@csssr.com' className='contacts__link'>hr@csssr.com</a>
						</Text>
					</div>
					<div className='contacts__text'>
						<Text size='xs' indent={false}>
							Для корреспонденции: 140090, Московская область,
							город Дзержинский, улица Лермонтова, дом 42.
						</Text>
					</div>
				</div>
			</div>
		);
	}
}

