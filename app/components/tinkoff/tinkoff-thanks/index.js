import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { animateScroll as scroll } from 'react-scroll';

import TinkoffTitle from 'components/tinkoff/tinkoff-title';
import TinkoffSubtitle from 'components/tinkoff/tinkoff-subtitle';
import Icon from 'components/icon';

import styles from './styles.css';

class TinkoffThanks extends Component {
	componentDidMount() {
		scroll.scrollToBottom();
	}

	render() {
		return (
			<div className={styles.root}>
				<TinkoffTitle align='center'>
					Отклик на&nbsp;вакансию
				</TinkoffTitle>
				<div className={styles.subtitle}>
					<TinkoffSubtitle align='center'>
						Представьтесь, пожалуйста, и&nbsp;расскажите нам ещё немного о&nbsp;себе.
						<br />
						В своём резюме укажите ссылку на&nbsp;GitHub.
					</TinkoffSubtitle>
				</div>
				<div className={styles.thanks}>
					<div className={styles.icon}>
						<Icon icon='tinkoff/thanks' />
					</div>
					<div className={styles.texts}>
						<p className={styles.title}>Спасибо!</p>
						<p className={styles.description}>Ваша заявка на&nbsp;вакансию отправлена.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(TinkoffThanks, styles);
