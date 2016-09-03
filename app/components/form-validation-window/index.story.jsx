import React from 'react';
import Link from 'components/link';
import FormValidationWindow from './index.jsx';
import storiesOf from 'utils/storiesOf';

storiesOf('FormValidationWindow')
	.add('default', () => (
		<FormValidationWindow
			text={<span>
				Случилось непредвиденное.
				Пожалуйста, попробуйте отправить форму снова или напишите нам на
				{' '}
				<Link href='mailto:hr@csssr.io'>hr@csssr.io</Link>
			</span>}
			title='Внимание!'
		/>
	));
