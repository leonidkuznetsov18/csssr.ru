import React, { Component } from 'react';

export default function YandexMetrika() {
	return <div>
		<script dangerouslySetInnerHTML={{
			__html: `
				(function (d, w, c) {
					(w[c] = w[c] || []).push(function() {
						try {
							w.yaCounter26486880 = new Ya.Metrika({
								id:26486880,
								clickmap:true,
								trackLinks:true,
								accurateTrackBounce:true,
								webvisor:true
							});
						} catch(e) { }
					});

					var n = d.getElementsByTagName("script")[0],
						s = d.createElement("script"),
						f = function () { n.parentNode.insertBefore(s, n); };
					s.async = true;
					s.src = "https://mc.yandex.ru/metrika/watch.js";

					if (w.opera == "[object Opera]") {
						d.addEventListener("DOMContentLoaded", f, false);
					} else { f(); }
				})(document, window, "yandex_metrika_callbacks");
			`
		}} />
		<noscript>
			<div>
				<img
					src="https://mc.yandex.ru/watch/26486880"
					htmlStyle="position: absolute; left: -9999px;"
					alt=""
				/>
			</div>
		</noscript>
	</div>;
}
