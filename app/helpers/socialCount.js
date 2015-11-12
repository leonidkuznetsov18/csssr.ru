import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

const urls = {
	tw: (url) => `https://cdn.api.twitter.com/1/urls/count.json?url=${url}`,
	fb: (url) => `http://graph.facebook.com/?id=${url}`,
	gp: (url) => `http://share.yandex.ru/gpp.xml?url=${url}`,
	vk: (url) => `https://vk.com/share.php?act=count&url=${url}`
}

export default function socialCount(type, url) {
	return new Promise((resolve, reject) => {
		var request = superagent.get(urls[type](url))

		if (type === 'vk') {
			window.VK = {
				Share: {
					count: (index, count) => resolve(count)
				}
			}
		} else if (type === 'gp') {
			window.services = {
				gplus: {
					cb: (count) => resolve(count)
				}
			}
		}

		if (type !== 'fb') {
			request = request.use(jsonp)
		}

		request.end((err, res) => {
			if (type === 'tw') {
				resolve(res.body.count)
			} else if (type === 'fb') {
				resolve(res.body.shares)
			}
		});
	})
}