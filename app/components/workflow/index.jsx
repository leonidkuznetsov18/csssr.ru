import React from 'react';

import './styles.css';

export default class Workflow extends React.Component {
	render() {
		return (
			<div className='workflow'>
				<h3 className='workflow__title'>
					на чем летают
				</h3>
				<h3 className='workflow__title workflow__title_size_middle'>
					наши
				</h3>
				<h3 className='workflow__title workflow__title_size_big'>
					ракеты
				</h3>

				<div className='workflow__text'>
					CSSSR&nbsp;&mdash; это, прежде всего, гибкий подход. Мы&nbsp;используем многие современные frontend-технологии, и&nbsp;при этом не&nbsp;зацикливаемся на&nbsp;чём-то одном. Да, мы&nbsp;не&nbsp;скрываем своих симпатий к&nbsp;изящной концепции БЭМ, но&nbsp;если задача требует использования другого подхода, никто из&nbsp;нас не&nbsp;станет ворчать. Мы&nbsp;стараемся избегать стереотипного мышления и&nbsp;поэтому всегда открыты к&nbsp;новым технологиям и&nbsp;нестандартным решениям.
				</div>

				<img
					className='workflow__mechanism'
					src={require('../../images/mechanism.svg')}
					alt='mechanizm'
					width='774'
					height='328'
				/>

			<div className='workflow__text workflow__text_size_small'>
					Наш рабочий процесс автоматизирован. Помимо собственных разработок, которые позволяют нам экономить время на&nbsp;рутине, в&nbsp;зависимости от&nbsp;задачи мы&nbsp;пользуемся следующими инструментами: css-препроцессорами Stylus, Less, Sass, html-препроцессором Jade, а&nbsp;также Gulp (либо Grunt)&nbsp;&mdash; в&nbsp;качестве сборщика. На&nbsp;подавляющем большинстве проектов применяется методология БЭМ. Также мы&nbsp;предлагаем всем разработчикам попробовать наш шаблон для быстрого старта проекта.
				</div>
			</div>
		);
	}
}
