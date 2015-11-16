import React from 'react';
import scrollbarWidth from 'scrollbar-width';

import Header from 'components/header';
import Footer from 'components/footer';
import Sharing from 'components/sharing';
import Contacts from 'components/contacts';
import cx from 'classnames';

import './styles.css';

export default function Application({children, banner, meta, active, openSidebar, closeSidebar}) {

	const applicationClass = cx({
		'application': true,
		'application_active': active,
	});

	return (
		<div className={applicationClass} onClick={closeSidebar} >
			<div
				className='application__wrapper'
				style={{
					paddingRight: active ? scrollbarWidth() : 0,
				}}
			>
				{banner}

				<Header open={openSidebar} active={active}/>
				<div className='application__inner'>
					{children}
				</div>
				<Sharing meta={meta}/>
				<Footer />
			</div>
			<div className='application__contacts'>
				<Contacts close={closeSidebar} active={active}/>
			</div>
		</div>
	);
}
