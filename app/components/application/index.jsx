import React, { PropTypes } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Sharing from 'components/sharing';
import Contacts from 'components/contacts';

import './styles.css';

export default function Application({children, banner, meta}) {
	return (
		<div className='application'>
			{banner}
			<Header />
			<div className='application__inner'>
				{children}
			</div>
			<Sharing meta={meta}/>
			<Footer />
			<Footer/>
			<Contacts/>
		</div>
	);
}

Application.propTypes = {
	children: PropTypes.node,
	banner: PropTypes.node
};
