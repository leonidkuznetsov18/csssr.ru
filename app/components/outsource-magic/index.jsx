import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import Title from 'components/title';

import styles from './styles.css';

function OutsourceMagic() {
	const sectionClass = (mod) => cx({
		[styles.section]: true,
		[styles[`section_${mod}`]]: styles[`section_${mod}`],
	});

	const titleClass = (mod) => cx({
		[styles.title]: true,
		[styles[`title_${mod}`]]: styles[`title_${mod}`],
	});

	const itemClass = (mod) => cx({
		[styles.item]: true,
		[styles[`item_type_${mod}`]]: styles[`item_type_${mod}`],
	});

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.square}>
					<div className={styles.content}>
						Magic
					</div>
				</div>
				<div className={styles.left}>
					<div className={sectionClass('html')}>
						<div className={titleClass('html')}>
							HTML
						</div>
						<div className={itemClass('main')}>
							jade
						</div>
						<div className={itemClass()}>
							slim
						</div>
						<div className={itemClass()}>
							haml
						</div>
					</div>

					<div className={sectionClass('css')}>
						<div className={titleClass('css')}>
							CSS
						</div>
						<div className={itemClass('main')}>
							stylus
						</div>
						<div className={itemClass()}>
							sass
						</div>
						<div className={itemClass()}>
							less
						</div>
					</div>
				</div>

				<div className={styles.right}>
					<div className={sectionClass('js')}>
						<div className={titleClass('js')}>
							JavaScript
						</div>
						<div className={itemClass('main')}>
							angular.js
						</div>
						<div className={itemClass('main')}>
							react.js
						</div>
						<div className={itemClass()}>
							backbone.js
						</div>
						<div className={itemClass()}>
							vanilla.js
						</div>
						<div className={itemClass('main')}>
							node.js
						</div>
					</div>

					<div className={sectionClass('build')}>
						<div className={itemClass('main')}>
							gulp
						</div>
						<div className={itemClass()}>
							grunt
						</div>
					</div>
				</div>

			</div>

			<div className={styles.technology}>
				<Title size='small'>
					Рис 1. стэк технологий
				</Title>

				<div className={styles.use + ' ' + styles.use_fill}>
					Применяется с неистовым удовольствием
				</div>

				<div className={styles.use}>
					Применяется с удовольствием
				</div>
			</div>
		</div>
	);
}

export default withStyles(OutsourceMagic, styles);
