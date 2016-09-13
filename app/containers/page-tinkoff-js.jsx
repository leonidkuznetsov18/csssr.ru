import React from 'react';

import Root from 'components/root';
import TinkoffLayout from 'components/tinkoff/tinkoff-layout';
import TinkoffHeader from 'components/tinkoff/tinkoff-header';
import TinkoffBanner from 'components/tinkoff/tinkoff-banner';
import TinkoffJob from 'components/tinkoff/tinkoff-job';
import TinkoffSkills from 'components/tinkoff/tinkoff-skills';
import TinkoffDuties from 'components/tinkoff/tinkoff-duties';
import TinkoffQuest from 'components/tinkoff/tinkoff-quest';

export default function TinkoffJsContainer({ children }) {
	return (
		<Root>
			<TinkoffLayout>
				<TinkoffHeader />
				<TinkoffBanner />
				<TinkoffJob />
				<TinkoffSkills />
				<TinkoffDuties />
				<TinkoffQuest />
				{children}
			</TinkoffLayout>
		</Root>
	);
}

TinkoffJsContainer.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.arrayOf(React.PropTypes.node),
		React.PropTypes.node,
	]),
};
