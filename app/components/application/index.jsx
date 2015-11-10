import React, { PropTypes } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

import './styles.css';

export default function Application({children, banner}) {
	return (
		<div className='application'>
			{banner}
			<Header/>
			<div className='application__inner'>
				{children}
			</div>
			<Footer/>
		</div>
	);
}

Application.propTypes = {
	children: PropTypes.node,
	banner: PropTypes.node
};
