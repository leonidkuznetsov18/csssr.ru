import React from 'react';
import PageJobForm from 'containers/page-job-form';

export default function PageVacancy({ vacancy }) {
	return <PageJobForm vacancy={vacancy} />;
}

PageVacancy.propTypes = {
	vacancy: React.PropTypes.object,
};
