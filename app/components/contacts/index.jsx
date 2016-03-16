import React from 'react';

import Title from 'components/title';
import Text from 'components/text';
import Widget from 'components/widget';
import Icon from 'components/icon';

import styles from './styles.css';

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
			<div className={styles.root}>
				<div className={styles.close} onClick={this.props.close}/>
				<div className={styles.header}>
					Уголок <br/>
					Развитого <br/>
					Socialisma
				</div>
				<div className={styles.info}>
					<Title size='small' color='black' component='h6'>
						Контактная информация
					</Title>
					<div className={styles.text}>
						<Text size='xs' indent={false}>
							Рабочее время с 12-00 до 21-00,
							понедельник — пятница.
						</Text>
					</div>
					<div className={styles.text}>
						<Text size='xs' indent={false}>
							Прием заказов
							{' '}
							<a href='mailto:sales@csssr.io'>
								sales@csssr.io
							</a>
						</Text>
					</div>
					<div className={styles.text}>
						<Text size='xs' indent={false}>
							Вопросы трудоустройства
							{' '}
							<a href='mailto:hr@csssr.io'>
								hr@csssr.io
							</a>
						</Text>
					</div>
					<div className={styles.text}>
						<Text size='xs' indent={false}>
							Для корреспонденции: 140090, Московская область,
							город Дзержинский, улица Лермонтова, дом 42.
						</Text>
					</div>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.widget}>
						{this.state.active &&
							<Widget type='fb'/>
						}
					</div>
					<div className={styles.widget + ' ' + styles.widget_type_bordered}>
						<div className={styles.job}>
							<Icon
								className={styles.arrow}
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
					<div className={styles.widget}>
						{this.state.active &&
							<Widget type='tw'/>
						}
					</div>
				</div>
			</div>
		);
	}
}
