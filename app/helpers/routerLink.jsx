import React from 'react';
import { Link } from 'react-router';

export default (Component) => {
	return class RouterLink extends React.Component {
		static contextTypes = {
			router: React.PropTypes.object,
		}

		handleClick = (event) => {
			if (event.target.nodeName !== 'A') {
				return;
			}

			Link.prototype.handleClick.call({
				props: {
					to: event.target.getAttribute('href'),
					target: event.target.getAttribute('target'),
				},
				context: this.context,
			}, event);
		}

		render() {
			return (
				<div onClick={this.handleClick}>
					<Component
						{...this.props}
					/>
				</div>
			);
		}
	};
};
