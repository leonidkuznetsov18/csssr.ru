import React from 'react';
import Circloader from 'components/circloader'

import './styles.css';


export default class OutsourcePower extends React.Component {

	render() {
		return (

			<div className='outsource-power'>
				<img
					className='outsource-power__cloud outsource-power__cloud_bottom'
					src={require('images/background/cloudx3.svg')}
				/>

				<div className="outsource-power__wrapper">

					<div className="outsource-power__circle">
						<div className="outsource-power__circle-1">Более чем</div>
						<div className="outsource-power__circle-2">6500</div>
						<div className="outsource-power__circle-3">нормочасов / месяц</div>
						<div className="outsource-power__thunderbolt">Мощность</div>
						<img
							className='outsource-power__cloud outsource-power__cloud_middle'
							src={require('images/background/cloudx3.svg')}
						/>
					</div>

					<div className="outsource-power__text">
						<div className="outsource-power__text-title">Подход</div>
						<p>В CSSSR активно используется принцип разделения труда. Это позволяет нам быстро масштабировать команду под срочные проекты и за минимальное время добиваться большого прогресса.</p>
					</div>

					<div
						id="outsourceLikeBox"
						className="outsource-power__social"
					>
						<div className="outsource-power__loader">
							<Circloader />
						</div>
						<div
							className="outsource-power__likebox fb-like"
							data-href='https://www.facebook.com/csssr/'
							data-layout='box_count'
							data-action='like'
							data-show-faces='true'
							data-share='true'
						/>
					</div>

				</div>
			</div>
		);
	}
}
