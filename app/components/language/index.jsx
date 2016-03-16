import React from 'react';
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

export default function Language({ current }) {
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
