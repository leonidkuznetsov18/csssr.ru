import React from 'react';
import PageVacancy from 'containers/page-vacancy';

export default function PageJobPreview(props) {
	return (
		<PageVacancy {...props} filter='active' />
	);
}
