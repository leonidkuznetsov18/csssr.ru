import React from 'react';
import getPageMetadata from 'helpers/getPageMetadata';
import Content from 'components/content';
import Thanks from 'components/thanks';

export default class ThanksContainer extends React.Component {
	static propTypes = {
		location: React.PropTypes.object,
	}

	render() {
		const meta = getPageMetadata(this.props.location.pathname);

		return (
			<Content>
				<Thanks meta={meta}/>
			</Content>
		);
	}
}
