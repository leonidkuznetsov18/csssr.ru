import React from 'react';

export default function Head({ children, meta }) {
	const {
		pageTitle,
		pageDescription,
		pageKeywords,
		shareDescription,
		shareTitle,
		shareImage,
		shareUrl,
	} = meta;

	return (
		<head>
			<meta charSet='utf-8'/>
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='viewport' content='width=1024' />
			<meta name='imagetoolbar' content='no' />
			<meta name='msthemecompatible' content='no' />
			<meta name='cleartype' content='on' />
			<meta name='HandheldFriendly' content='True' />
			<meta name='format-detection' content='telephone=no' />
			<meta name='format-detection' content='address=no' />
			<meta name='google' value='notranslate' />
			<meta name='apple-mobile-web-app-capable' content='yes' />

			<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
			<link sizes='57x57' href='/apple-touch-icon-57x57.png' rel='apple-touch-icon' />
			<link sizes='114x114' href='/apple-touch-icon-114x114.png' rel='apple-touch-icon' />
			<link sizes='72x72' href='/apple-touch-icon-72x72.png' rel='apple-touch-icon' />
			<link sizes='144x144' href='/apple-touch-icon-144x144.png' rel='apple-touch-icon' />
			<link sizes='60x60' href='/apple-touch-icon-60x60.png' rel='apple-touch-icon' />
			<link sizes='120x120' href='/apple-touch-icon-120x120.png' rel='apple-touch-icon' />
			<link sizes='76x76' href='/apple-touch-icon-76x76.png' rel='apple-touch-icon' />
			<link sizes='152x152' href='/apple-touch-icon-152x152.png' rel='apple-touch-icon' />
			<link sizes='180x180' href='/apple-touch-icon-180x180.png' rel='apple-touch-icon' />
			<link sizes='192x192' href='/favicon-192x192.png' rel='icon' type='image/png' />
			<link sizes='160x160' href='/favicon-160x160.png' rel='icon' type='image/png' />
			<link sizes='96x96' href='/favicon-96x96.png' rel='icon' type='image/png' />
			<link rel='manifest' href='/manifest.json' />
			<meta name='application-name' content='' />
			<meta name='msapplication-tooltip' content='' />
			<meta name='msapplication-TileColor' content='#ffffff' />
			<meta name='msapplication-TileImage' content='/mstile-large.png' />
			<meta name='msapplication-starturl' content='http://csssr.ru/' />
			<meta name='msapplication-tap-highlight' content='no' />
			<meta name='msapplication-square70x70logo' content='/mstile-small.png' />
			<meta name='msapplication-square150x150logo' content='/mstile-medium.png' />
			<meta name='msapplication-wide310x150logo' content='/mstile-wide.png' />
			<meta name='msapplication-square310x310logo' content='/mstile-large.png' />

			<title>
				{pageTitle}
			</title>

			<meta name='description' content={pageDescription || shareDescription || ''}/>
			<meta name='keywords' content={pageKeywords || ''}/>

			<meta itemProp='name' content={shareTitle}/>
			<meta itemProp='description' content={shareDescription}/>
			<meta itemProp='image' content={shareImage}/>

			<meta name='twitter:card' content='summary_large_image'/>
			<meta name='twitter:title' content={shareTitle}/>
			<meta name='twitter:description' content={shareDescription}/>
			<meta name='twitter:image:src' content={shareImage}/>

			<meta property='og:title' content={shareTitle}/>
			<meta property='og:url' content={shareUrl}/>
			<meta property='og:image' content={shareImage}/>
			<meta property='og:description' content={shareDescription}/>
			{children}
		</head>
	);
}

Head.propTypes = {
	meta: React.PropTypes.object,
	children: React.PropTypes.element,
};

Head.defaultProps = {
	meta: {},
};
