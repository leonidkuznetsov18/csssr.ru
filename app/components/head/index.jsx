import React, { PropTypes as pt } from 'react';

export default function Head({ children, head = {} }) {
	return (
		<head>
			<meta charSet='utf-8' />
			<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
			<meta content='width=1024' name='viewport' />
			<meta content='no' name='imagetoolbar' />
			<meta content='no' name='msthemecompatible' />
			<meta content='on' name='cleartype' />
			<meta content='True' name='HandheldFriendly' />
			<meta content='telephone=no' name='format-detection' />
			<meta content='address=no' name='format-detection' />
			<meta name='google' value='notranslate' />
			<meta content='yes' name='apple-mobile-web-app-capable' />

			<meta content='black-translucent' name='apple-mobile-web-app-status-bar-style' />
			<link
				href='/apple-touch-icon-57x57.png'
				rel='apple-touch-icon'
				sizes='57x57'
			/>
			<link
				href='/apple-touch-icon-114x114.png'
				rel='apple-touch-icon'
				sizes='114x114'
			/>
			<link
				href='/apple-touch-icon-72x72.png'
				rel='apple-touch-icon'
				sizes='72x72'
			/>
			<link
				href='/apple-touch-icon-144x144.png'
				rel='apple-touch-icon'
				sizes='144x144'
			/>
			<link
				href='/apple-touch-icon-60x60.png'
				rel='apple-touch-icon'
				sizes='60x60'
			/>
			<link
				href='/apple-touch-icon-120x120.png'
				rel='apple-touch-icon'
				sizes='120x120'
			/>
			<link
				href='/apple-touch-icon-76x76.png'
				rel='apple-touch-icon'
				sizes='76x76'
			/>
			<link
				href='/apple-touch-icon-152x152.png'
				rel='apple-touch-icon'
				sizes='152x152'
			/>
			<link
				href='/apple-touch-icon-180x180.png'
				rel='apple-touch-icon'
				sizes='180x180'
			/>
			<link
				href='/favicon-192x192.png'
				rel='icon'
				sizes='192x192'
				type='image/png'
			/>
			<link
				href='/favicon-160x160.png'
				rel='icon'
				sizes='160x160'
				type='image/png'
			/>
			<link
				href='/favicon-96x96.png'
				rel='icon'
				sizes='96x96'
				type='image/png'
			/>
			<link
				href='/manifest.json'
				rel='manifest'
			/>
			<meta content='CSSSR' name='application-name' />
			<meta content='Космический фронтенд — CSSSR' name='msapplication-tooltip' />
			<meta content='#ffffff' name='msapplication-TileColor' />
			<meta content='/mstile-large.png' name='msapplication-TileImage' />
			<meta content='http://csssr.ru/' name='msapplication-starturl' />
			<meta content='no' name='msapplication-tap-highlight' />
			<meta content='/mstile-small.png' name='msapplication-square70x70logo' />
			<meta content='/mstile-medium.png' name='msapplication-square150x150logo' />
			<meta content='/mstile-wide.png' name='msapplication-wide310x150logo' />
			<meta content='/mstile-large.png' name='msapplication-square310x310logo' />

			{head.title && head.title.toComponent()}
			{head.meta && head.meta.toComponent()}

			{children}
		</head>
	);
}

Head.propTypes = {
	children: pt.element,
	head: pt.object,
};
