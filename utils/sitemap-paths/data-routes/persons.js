import timeline from '../../../app/data/timeline.json';

export default (
	timeline
		.filter((time) => time.newstaff)
		.map((time) => time.newstaff)
		.reduce((result, newStaff) => result.concat(newStaff))
		.map((person) => person.avatar)
);
