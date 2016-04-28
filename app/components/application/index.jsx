import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import scrollbarSize from 'scrollbar-size';

import Header from 'components/header';
import Footer from 'components/footer';
import Sharing from 'components/sharing';
import Contacts from 'components/contacts';
import cx from 'classnames';

import styles from './styles.css';

function Application({ children, banner, meta, active, openSidebar, closeSidebar, overflow, mounted }) {
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
				className={styles.wrapper}
				onClick={closeSidebar}
				style={{
					paddingRight: overflow ? scrollbarSize() : 0,
				}}
			>
				{banner}

				<Header open={openSidebar} />
				<div className={styles.inner}>
					{children}
				</div>
				<Sharing meta={meta} />
				<Footer />
			</div>
			<div className={contactsClass}>
				<Contacts
					active={active}
					onClose={closeSidebar}
				/>
			</div>
		</div>
	);
}

Application.propTypes = {
	active: React.PropTypes.bool,
	banner: React.PropTypes.element,
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
	closeSidebar: React.PropTypes.func,
	meta: React.PropTypes.object,
	mounted: React.PropTypes.bool,
	openSidebar: React.PropTypes.func,
	overflow: React.PropTypes.bool,
};

export default withStyles(Application, styles);
