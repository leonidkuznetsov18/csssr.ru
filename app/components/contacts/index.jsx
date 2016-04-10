import React from 'react';

import Title from 'components/title';
import Text from 'components/text';
import Widget from 'components/widget';
import Icon from 'components/icon';

import './styles.css';

export default class Contacts extends React.Component {
	static propTypes = {
		active: React.PropTypes.bool,
		close: React.PropTypes.func,
		history: React.PropTypes.object,
	}

	componentWillMount() {
		this.setState({
			active: false,
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.active) {
			this.setState({
				active: true,
			});
		}
	}

	render() {
		return (
			<div className='contacts'>
				<div className='contacts__close' onClick={this.props.close}/>
				<div className='contacts__header'>
					Уголок <br/>
					Развитого <br/>
					Socialisma
				</div>
				<div className='contacts__info'>
					<Title size='small' color='black' component='h6'>
						Контактная информация
					</Title>
					<div className='contacts__text'>
						<Text size='xs' indent={false}>
							Рабочее время с 12-00 до 21-00,
							понедельник — пятница.
						</Text>
					</div>
					<div className='contacts__text'>
						<Text size='xs' indent={false}>
							Прием заказов
							{' '}
							<a href='sales@csssr.io'>
								sales@csssr.io
							</a>
						</Text>
					</div>
					<div className='contacts__text'>
						<Text size='xs' indent={false}>
							Вопросы трудоустройства
							{' '}
							<a href='mailto:hr@csssr.io'>
								hr@csssr.io
							</a>
						</Text>
					</div>
					<div className='contacts__text'>
						<Text size='xs' indent={false}>
							Для корреспонденции: 140090, Московская область,
							город Дзержинский, улица Лермонтова, дом 42.
						</Text>
					</div>
				</div>
				<div className='contacts__wrapper'>
					<div className='contacts__widget'>
						{this.state.active &&
							<Widget type='fb'/>
						}
					</div>
					<div className='contacts__widget contacts__widget_type_bordered'>
						<div className='contacts__job'>
							<Icon
								className='contacts__arrow'
								icon='curve-arrow'
							/>

							<Text size='xs'>
								Анонсы вакансий тут
							</Text>
						</div>
						{this.state.active &&
							<Widget type='vk'/>
						}
					</div>
					<div className='contacts__widget'>
						{this.state.active &&
							<Widget type='tw'/>
						}
					</div>
				</div>
			</div>
		);
	}
}
