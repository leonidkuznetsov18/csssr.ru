import React from 'react';

import './styles.css';

export default function OutsourceMagic() {
	return (
		<div className='outsource-magic'>
			<div className='outsource-magic__wrapper'>
				<div className='outsource-magic__square'>
					<div className='outsource-magic__content'>
						Magic
					</div>
				</div>
				<div className='outsource-magic__left'>
					<div className='outsource-magic__html'>
						<div className='outsource-magic__html-text'>
							html
						</div>
						<div className='outsource-magic__html-item outsource-magic__html-item_type_main'>
							jade
						</div>
						<div className='outsource-magic__html-item'>
							slim
						</div>
						<div className='outsource-magic__html-item'>
							haml
						</div>
					</div>

					<div className='outsource-magic__css'>
						<div className='outsource-magic__css-text'>
							css
						</div>
						<div className='outsource-magic__css-item outsource-magic__css-item_type_main'>
							stylus
						</div>
						<div className='outsource-magic__css-item'>
							sass
						</div>
						<div className='outsource-magic__css-item'>
							less
						</div>
					</div>
				</div>

				<div className='outsource-magic__right'>
					<div className='outsource-magic__js'>
						<div className='outsource-magic__js-text'>
							JavaScript
						</div>
						<div className='outsource-magic__js-item outsource-magic__js-item_type_main'>
							angular.js
						</div>
						<div className='outsource-magic__js-item outsource-magic__js-item_type_main'>
							react.js
						</div>
						<div className='outsource-magic__js-item'>
							backbone.js
						</div>
						<div className='outsource-magic__js-item'>
							vanilla.js
						</div>
						<div className='outsource-magic__js-item outsource-magic__js-item_type_main'>
							node.js
						</div>
					</div>

					<div className='outsource-magic__gulp'>
						gulp
					</div>
					<div className='outsource-magic__grunt'>
						grunt
					</div>
				</div>

			</div>

			<div className='outsource-magic__technology'>
				<div className='outsource-magic__title'>
					Рис 1. стэк технологий
				</div>

				<div className='outsource-magic__use outsource-magic__use_fill'>
					Применяется с неистовым удовольствием
				</div>

				<div className='outsource-magic__use'>
					Применяется с удовольствием
				</div>
			</div>
		</div>
	);
}
