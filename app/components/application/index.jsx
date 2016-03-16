import React from 'react';
import scrollbarSize from 'scrollbar-size';

import Header from 'components/header';
import Footer from 'components/footer';
import Sharing from 'components/sharing';
import Contacts from 'components/contacts';
import cx from 'classnames';

import styles from './styles.css';

export default function Application({ children, banner, meta, active, openSidebar, closeSidebar, overflow, mounted }) {
	const applicationClass = cx({
		[styles.root]: true,
		[styles.root_active]: active,
	});

	const contactsClass = cx({
		[styles.contacts]: true,
		[styles.contacts_mounted]: mounted,
	});

	return (
		<div className={applicationClass}>
			<div
				onClick={closeSidebar}
				className={styles.wrapper}
				style={{
					paddingRight: overflow ? scrollbarSize() : 0,
				}}
			>
				{banner}

				<Header open={openSidebar} active={active}/>
				<div className={styles.inner}>
					{children}
				</div>
				<Sharing meta={meta}/>
				<Footer />
			</div>
			<div className={contactsClass}>
				<Contacts close={closeSidebar} active={active}/>
			</div>
		</div>
	);
}

Application.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
	banner: React.PropTypes.element,
	meta: React.PropTypes.object,
	active: React.PropTypes.bool,
	openSidebar: React.PropTypes.func,
	closeSidebar: React.PropTypes.func,
	overflow: React.PropTypes.bool,
	mounted: React.PropTypes.bool,
};
