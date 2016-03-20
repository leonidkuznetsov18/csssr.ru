import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import Parallax from 'components/parallax';
import Title from 'components/title';
import Text from 'components/text';
import Widget from 'components/widget';

import styles from './styles.css';

function OutsourcePower() {
	const cloudClass = (position) => cx({
		[styles.cloud]: true,
		[styles[`cloud_${position}`]]: position,
	});

	return (
		<div className={styles.root}>
			<img
				className={cloudClass('bottom')}
				src={require('images/background/cloudx3.svg')}
			/>
			<img
				className={cloudClass('top')}
				src={require('images/background/cloudx3.svg')}
				alt='cloud'
			/>

			<div className={styles.wrapper}>

				<div className={styles.circle}>
					<div className={styles.circle1}>
						Более чем
					</div>
					<div className={styles.circle2}>
						6500
					</div>
					<div className={styles.circle3}>
						нормочасов / месяц
					</div>
					<div className={styles.thunderbolt}>
						Мощность
					</div>
					<img
						className={cloudClass('middle')}
						src={require('images/background/cloudx3.svg')}
					/>
				</div>

				<div className={styles.text}>
					<Title size='medium'>
						Подход
					</Title>

					<Text>
						В&nbsp;CSSSR активно используется принцип разделения
						труда. Это позволяет нам быстро масштабировать команду
						под срочные проекты и&nbsp;за&nbsp;минимальное время
						добиваться большого прогресса.
					</Text>
				</div>
			</div>

			<Parallax
				min={-330}
				max={0}
				offset={330}
				speed={0.3}
			>
				<div className={styles.social}>
					<Widget type='likebox'/>
				</div>
			</Parallax>
		</div>
	);
}

export default withStyles(OutsourcePower, styles);
