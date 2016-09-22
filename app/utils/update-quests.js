const findQuest = (id) => (item) =>
	item.id === id;

export default (quests = [], id, data) => {
	const index = quests.findIndex(findQuest(id));
	const quest = {
		...quests[index],
		...data,
	};

	return [
		...quests.slice(0, index),
		quest,
		...quests.slice(index + 1),
	];
};
