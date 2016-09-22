import isObject from 'lodash.isplainobject';

export default (key, values = []) => {
	const attachments = [];

	values.forEach((item, i) => {
		const newKey = `${key}[${i}]`;

		if (isObject(item)) {
			return Object.keys(item).forEach((itemKey) =>
				attachments.push({
					key: `${newKey}[${itemKey}]`,
					value: item[itemKey],
				})
			);
		}

		attachments.push({
			key: newKey,
			value: item,
		});
	});

	return attachments;
};
