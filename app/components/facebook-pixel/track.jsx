import React, { PropTypes as pt } from 'react';
import isEmpty from 'lodash.isempty';

function FacebookPixelTrack({ event, options = {} }) {
	const fbqOptions = isEmpty(options) ? '' : `, ${JSON.stringify(options)}`;

	return (<div>
		<script
			dangerouslySetInnerHTML={{
				__html: `fbq('track', '${event}'${fbqOptions});`,
			}}
		/>
	</div>);
}

FacebookPixelTrack.propTypes = {
	event: pt.string.isRequired,
	options: pt.object,
};

FacebookPixelTrack.defaultProps = {
	options: {},
};

export default FacebookPixelTrack;
