import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import styles from './styles.css';

const languages = [
	{
		href: 'http://csssr.com',
		text: 'en',
	},
	{
		href: 'http://csssr.de',
		text: 'de',
	},
	{
		href: 'http://csssr.ru',
		text: 'ru',
	},
];

function Language({ current }) {
	const linkClass = (isActive) => cx({
		[styles.link]: true,
		[styles.link_active]: isActive,
	});

	return (
		<div className={styles.root}>
			{languages.map((language, index) => (
				<a
					key={index}
					className={linkClass(current === language.text)}
					href={language.href}
				>
					{language.text}
				</a>
			))}
		</div>
	);
}

Language.propTypes = {
	current: React.PropTypes.string,
};

Language.defaultProps = {
	current: 'ru',
};

export default withStyles(Language, styles);
