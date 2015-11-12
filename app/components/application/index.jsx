import React, { PropTypes } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Sharing from 'components/sharing';
import Contacts from 'components/contacts';
import cx from 'classnames';

import './styles.css';

export default function Application({children, banner, meta, active, openSidebar, closeSidebar}) {

	const applicationClass = cx ({
		'application': true,
		'application_active': active
	});

	return (
		<div className={applicationClass}>
			<div className='application__wrapper' onClick={closeSidebar}>
				{banner}

				<Header open={openSidebar} active={active}/>
				<div className='application__inner'>
					{children}
				</div>
				<Sharing meta={meta}/>
				<Footer />
			</div>
			<Contacts close={closeSidebar} active={active}/>
		</div>
	);
}
