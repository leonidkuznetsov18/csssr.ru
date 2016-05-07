import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Title from 'components/title';
import Text from 'components/text';
import Widget from 'components/widget';
import Icon from 'components/icon';

import styles from './styles.css';

class Contacts extends React.Component {
	static propTypes = {
		active: React.PropTypes.bool,
		history: React.PropTypes.object,
		onClose: React.PropTypes.func,
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
				<div
					className={styles.close}
					onClick={this.props.onClose}
				/>
				<div className={styles.header}>
					Уголок <br />
					Развитого <br />
					Socialisma
				</div>
				<div className={styles.info}>
					<Title
						color='black'
						component='h6'
						size='small'
					>
						Контактная информация
					</Title>
					<div className={styles.text}>
						<Text
							indent={false}
							size='xs'
						>
							Рабочее время с 12-00 до 21-00,
							понедельник — пятница.
						</Text>
					</div>
					<div className={styles.text}>
						<Text
							indent={false}
							size='xs'
						>
							Прием заказов
							{' '}
							<a href='mailto:sales@csssr.io'>
								sales@csssr.io
							</a>
						</Text>
					</div>
					<div className={styles.text}>
						<Text
							indent={false}
							size='xs'
						>
							Вопросы трудоустройства
							{' '}
							<a href='mailto:hr@csssr.io'>
								hr@csssr.io
							</a>
						</Text>
					</div>
					<div className={styles.text}>
						<Text
							indent={false}
							size='xs'
						>
							Для корреспонденции: 115280, РФ, г.&nbsp;Москва, ул.&nbsp;Ленинская Слобода, д. 19, этаж 1, офис 41, <nobr>а/я</nobr>&nbsp;&#8470;&nbsp;12.
						</Text>
					</div>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.widget}>
						{this.state.active &&
							<Widget type='fb' />
						}
					</div>
					<div className={styles.widget + ' ' + styles.widget_type_bordered}>
						<div className={styles.job}>
							<span className={styles.arrow}>
								<Icon icon='curve-arrow' />
							</span>

							<Text size='xs'>
								Анонсы вакансий тут
							</Text>
						</div>
						{this.state.active &&
							<Widget type='vk' />
						}
					</div>
					<div className={styles.widget}>
						{this.state.active &&
							<Widget type='tw' />
						}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(Contacts, styles);
