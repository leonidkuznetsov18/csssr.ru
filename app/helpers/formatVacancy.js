import mdToHtmlLink from 'helpers/md-to-html-link';
import mdToHtmlStrike from 'helpers/md-to-html-strike';

const formatText = (str) => mdToHtmlStrike(mdToHtmlLink(str));
const formatSection = ({ title, text, boldText, list }, { isSubSection = false, titleProps } = {}) => {
	const data = {};

	if (title) {
		data.title = {
			text: title,
			props: titleProps || {
				size: isSubSection ? 'small' : 'medium',
			},
		};
	}

	if (text) {
		data.description = {
			text: formatText(text),
			props: boldText ? {
				weight: 'normal',
			} : {
				size: 'm',
			},
		};
	}

	if (list) {
		data.list = {
			items: list.map((item) => formatText(item)),
			props: {
				size: isSubSection ? 'xs' : 's',
			},
		};
	}

	return data;
};

export default function ({ name, description, sections }) {
	const questIndex = sections.findIndex((item) => item.type === 'quest');
	const data = {
		beforeQuest: [formatSection({
			title: name,
			text: description,
		}, { titleProps: {} })],
	};

	if (questIndex >= 0) {
		data.beforeQuest = [
			...data.beforeQuest,
			...sections.slice(0, questIndex).map((item) => formatSection(item)),
		];
		const quest = sections[questIndex];
		data.quest = [
			formatSection(quest),
			...quest.sections.map((item) => formatSection(item, { isSubSection: true })),
		];
		data.file = {
			type: quest.fileExt,
			filename: quest.fileName,
			link: quest.fileLink,
			size: quest.fileSize,
		};
		data.afterQuest = sections.slice(questIndex + 1).map(formatSection);
	} else {
		data.beforeQuest = [
			...data.beforeQuest,
			...sections.map(formatSection),
		];
	}

	return data;
}
