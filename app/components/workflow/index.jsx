import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import Text from 'components/text';
import Link from 'components/link';

import styles from './styles.css';

function Workflow() {
	const titleClass = (size) => cx({
		[styles.title]: true,
		[styles[`title_size_${size}`]]: size,
	});

	return (
		<div className={styles.root}>
			<h3 className={titleClass()}>
				на чем летают
			</h3>
			<h3 className={titleClass('middle')}>
				наши
			</h3>
			<h3 className={titleClass('big')}>
				ракеты
			</h3>

			<Text>
				CSSSR&nbsp;&mdash; это, прежде всего, гибкий подход. Мы&nbsp;используем многие современные frontend-технологии, и&nbsp;при&nbsp;этом не&nbsp;зацикливаемся на&nbsp;чём-то одном. Да, мы&nbsp;не&nbsp;скрываем своих симпатий к&nbsp;изящной концепции БЭМ, но&nbsp;если задача требует использования другого подхода, никто из&nbsp;нас не&nbsp;станет ворчать. Мы&nbsp;стараемся избегать стереотипного мышления и&nbsp;поэтому всегда открыты к&nbsp;новым технологиям и&nbsp;нестандартным решениям.
			</Text>

			<img
				alt='mechanizm'
				className={styles.mechanism}
				src={require('../../images/mechanism.svg')}
			/>

			<Text size='s'>
				Наш рабочий процесс автоматизирован. Помимо собственных разработок, которые позволяют нам экономить время на&nbsp;рутине, в&nbsp;зависимости от&nbsp;задачи мы&nbsp;пользуемся следующими инструментами: css-препроцессорами Stylus, Less, Sass, html-препроцессором Jade, а&nbsp;также Gulp (либо Grunt)&nbsp;&mdash; в&nbsp;качестве сборщика. На&nbsp;подавляющем большинстве проектов применяется методология БЭМ. Также мы&nbsp;предлагаем всем разработчикам попробовать наш&nbsp;

				<Link
					href='https://github.com/CSSSR/csssr-project-template'
					target='_blank'
					underline
				>
					шаблон для быстрого старта проекта
				</Link>.
			</Text>
		</div>
	);
}

export default withStyles(Workflow, styles);
