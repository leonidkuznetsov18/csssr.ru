import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import stopPropagation from 'utils/stop-propagation';
import Popup from 'components/popup';
import TimelineQuote from 'components/timeline-quote';

import styles from './styles.css';

function TimelinePopup(props) {
	return (
		<Popup active={props.active} onClose={props.onClose} >
			<div
				className={styles.root}
				onClick={stopPropagation}
			>
				<div className={styles.staff}>
					<img
						alt={props.name}
						className={styles.avatar}
						src={require(`images/timeline/avatar/${props.avatar}.jpg`)}
						title={props.name}
					/>
					<div className={styles.name}>
						{props.name}
					</div>
					<div className={styles.city}>
						{props.city}
					</div>
				</div>

				{props.histories &&
					<div className={styles.quoute}>
						<TimelineQuote
							text={props.histories}
							title='История связанная с CSSSR'
						/>
					</div>
				}

				{props.wishes &&
					<div className={styles.quoute}>
						<TimelineQuote
							text={props.wishes}
							title='Пожелания CSSSR'
						/>
					</div>
				}
			</div>
		</Popup>
	);
}

TimelinePopup.propTypes = {
	active: React.PropTypes.bool,
	avatar: React.PropTypes.string,
	city: React.PropTypes.string,
	data: React.PropTypes.object,
	histories: React.PropTypes.string,
	name: React.PropTypes.string,
	onClose: React.PropTypes.func,
	wishes: React.PropTypes.string,
};

export default withStyles(TimelinePopup, styles);
