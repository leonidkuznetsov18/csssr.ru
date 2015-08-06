import React from 'react';
import Parallax from 'components/parallax';
import Icon from 'components/icon';
import Service from 'components/service';
import Content from 'components/content';
import Description from 'components/description';
import './styles.css';

export default class Index extends React.Component {
	componentDidMount() {
		document.title = 'Космический фронтенд';
	}

	render() {
		return (
			<div className='index'>
				<div className='index__inner'>
					<Icon
						className='index__header'
						icon='mission'
					/>
					<Parallax speed={0.3}>
						<Icon
							className='index__rocket'
							icon='rocket'
						/>
					</Parallax>
					<div className='index__services'>
						<div className='index__service'>
							<Service index={0} />
						</div>
						<div className='index__service'>
							<Service index={1} />
						</div>
						<Icon
							className='index__satellite'
							icon='satellite'
						/>
					</div>
				</div>
				<div className='index__content'>
					<Content hole={true}>
						<Description/>
					</Content>
				</div>
			</div>
		);
	}
}
