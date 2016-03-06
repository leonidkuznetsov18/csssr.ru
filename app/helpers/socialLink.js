import Helmet from 'react-helmet';

function getContentByType(helmetState = [], type) {
	return (helmetState.filter((item) => item.name === type)[0] || {}).content;
}

function formatHelmetState(helmetState) {
	return {
		shareTitle: getContentByType(helmetState.metaTags, 'og:title'),
		shareUrl: getContentByType(helmetState.metaTags, 'og:url'),
	};
}

export default function socialLink(type) {
	const helmetState = Helmet.peek();
	const opt = formatHelmetState(helmetState);

	switch (type) {
	case 'vk':
		return `http://vk.com/share.php?url=${opt.shareUrl}&title=${opt.shareTitle}`;
	case 'fb':
		return `https://www.facebook.com/sharer/sharer.php?u=${opt.shareUrl}`;
	case 'tw':
		return `https://twitter.com/intent/tweet?url=${opt.shareUrl}&text=${opt.shareTitle}`;
	case 'gp':
		return `https://plus.google.com/share?url=${opt.shareUrl}`;
	}
}
