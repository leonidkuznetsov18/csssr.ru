import React from 'react';
import Text from 'components/text';

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

				<Text>
					CSSSR — это, прежде всего, гибкий подход. Мы используем многие современные frontend-технологии, и при этом не зацикливаемся на чём-то одном. Да, мы не скрываем своих симпатий к изящной концепции БЭМ, но если задача требует использования другого подхода, никто из нас не станет ворчать. Мы стараемся избегать стереотипного мышления и поэтому всегда открыты к новым технологиям и нестандартным решениям.
				</Text>

				<img
					className='workflow__mechanism'
					src={require('../../images/mechanism.svg')}
					alt='mechanizm'
					width='774'
					height='328'
				/>

				<Text size='small'>
					Наш рабочий процесс автоматизирован. Помимо собственных разработок, которые позволяют нам экономить время на рутине, в зависимости от задачи мы пользуемся следующими инструментами: css-препроцессорами Stylus, Less, Sass, html-препроцессором Jade, а также Gulp (либо Grunt) — в качестве сборщика. На подавляющем большинстве проектов применяется методология БЭМ. Также мы предлагаем всем разработчикам попробовать наш шаблон для быстрого старта проекта.
				</Text>
			</div>
		);
	}
}
