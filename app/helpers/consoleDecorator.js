const configMessage = [
	{
		text: ':hug:\n',
		styles: [
			'font-family: "Roboto";',
			'font-size: 270px;',
			'font-weight: 700;',
			'color: #333;',
		],
	},
	{
		text: 'Давай к нам: ',
		styles: [
			'font-family: "Roboto";',
			'font-size: 24px;',
			'color: #333;',
			'margin-left: 3em;',
		],
	},
	{
		text: 'hr@csssr.io',
		styles: [
			'font-family: "Roboto";',
			'font-size: 24px;',
			'color: #158ecd;',
		],
	},
];

const message = configMessage.map((part) => `%c${part.text}`).join('');
const styles = configMessage.map((part) => part.styles.join(''));

const displayMessage = () => {
	console.log(message, ...styles);
	console.log = () => {};
};

export default () => {
	displayMessage();
};
