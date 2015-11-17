import React from 'react';
import Circloader from 'components/circloader';
import Parallax from 'components/parallax';
import Title from 'components/title';
import Text from 'components/text';
import Widget from 'components/widget';

import './styles.css';

export default function OutsourcePower() {
	return (
		<div className='outsource-power'>
			<img
				className='outsource-power__cloud outsource-power__cloud_bottom'
				src={require('images/background/cloudx3.svg')}
			/>
			<img
				className='outsource-power__cloud outsource-power__cloud_top'
				src={require('images/background/cloudx3.svg')}
				alt='cloud'
			/>

			<div className='outsource-power__wrapper'>

				<div className='outsource-power__circle'>
					<div className='outsource-power__circle-1'>
						Более чем
					</div>
					<div className='outsource-power__circle-2'>
						6500
					</div>
					<div className='outsource-power__circle-3'>
						нормочасов / месяц
					</div>
					<div className='outsource-power__thunderbolt'>
						Мощность
					</div>
					<img
						className='outsource-power__cloud outsource-power__cloud_middle'
						src={require('images/background/cloudx3.svg')}
					/>
				</div>

				<div className='outsource-power__text'>
					<Title size='medium'>
						Подход
					</Title>

					<Text>
						В CSSSR активно используется принцип разделения труда.
						Это позволяет нам быстро масштабировать команду
						под срочные проекты и за минимальное время добиваться
						большого прогресса.
					</Text>
				</div>
			</div>

			<Parallax
				min={-330}
				max={0}
				offset={330}
				speed={0.3}
			>
				<div className='outsource-power__social'>
					<Widget type='likebox'/>
				</div>
			</Parallax>
		</div>
	);
}
