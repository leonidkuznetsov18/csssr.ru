export default function socialLink(type, opt) {
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
