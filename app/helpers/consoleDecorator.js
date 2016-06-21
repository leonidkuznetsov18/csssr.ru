const configMessage = [
	{
		text: ':',
		styles: [
			'font-family: Times New Roman;',
			'font-size: 168px;',
			'font-weight: 700;',
			'color: #333;',
		],
	},
	{
		text: 'hug',
		styles: [
			'font-family: Roboto, Helvetica;',
			'font-size: 168px;',
			'font-weight: 700;',
			'color: #333;',
		],
	},
	{
		text: ':\n',
		styles: [
			'font-family: Times New Roman;',
			'font-size: 168px;',
			'font-weight: 700;',
			'color: #333;',
		],
	},
	{
		text: 'Давай к нам: ',
		styles: [
			'font-family: "Tahoma";',
			'font-size: 24px;',
			'color: #333;',
			'margin-left: 64px;',
		],
	},
	{
		text: 'hr@csssr.io',
		styles: [
			'font-family: "Tahoma";',
			'font-size: 24px;',
			'color: #158ecd;',
		],
	},
];

const message = configMessage.map((part) => `%c${part.text}`).join('');
const styles = configMessage.map((part) => part.styles.join(''));
const log = console.log.bind(console);

const displayMessage = () => {

	window.log = log;
	console.log = () => {};

	log(message, ...styles);

};

export default displayMessage;
