import { PropTypes } from 'react';

const defaultFieldPropTypes = {
	type: PropTypes.string.isRequired,
	title: PropTypes.string,
	text: PropTypes.string,
	boldText: PropTypes.bool,
	list: PropTypes.arrayOf(PropTypes.string),
};

export const vacancyShape = PropTypes.shape({
	id: PropTypes.string.isRequired,
	createDate: PropTypes.string.isRequired,
	editDate: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	isArchived: PropTypes.bool.isRequired,
	pathName: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	maxFileSize: PropTypes.number.isRequired,
	fileExt: PropTypes.string.isRequired,
	hasPortfolio: PropTypes.bool.isRequired,
	hasResume: PropTypes.bool.isRequired,
	sections: PropTypes.arrayOf(PropTypes.shape({
		...defaultFieldPropTypes,
		fileSize: PropTypes.string,
		fileExt: PropTypes.string,
		fileName: PropTypes.string,
		fileLink: PropTypes.string,
		sections: PropTypes.arrayOf(PropTypes.shape(defaultFieldPropTypes)),
	})).isRequired,
});

export const vacanciesShape = PropTypes.arrayOf(vacancyShape);
