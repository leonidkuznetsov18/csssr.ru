import React from 'react';
import scrollbarSize from 'scrollbar-size';

export default (Component) => {
	return class disableScroll extends React.Component {
		componentDidMount() {
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${scrollbarSize()}px`;
		}

		componentWillUnmount() {
			document.body.style.overflow = null;
			document.body.style.paddingRight = null;
		}

		render() {
			return (
				<Component {...this.props}/>
			);
		}
	};
};
