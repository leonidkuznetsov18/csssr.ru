import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import Button from 'components/button';
import Icon from 'components/icon';
import Title from 'components/title';
import Text from 'components/text';
import AudioButton from 'components/audio-button';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';

import styles from './styles.css';

function TimelineItem(props) {
	const images = props.data.images && props.data.images.map((tag, index) => (
		<img
			className={styles.images}
			key={index}
			src={require(`images/timeline/${tag.url}`)}
			style={{
				width: tag.width,
				height: tag.height,
			}}
		/>
	));

	const names = props.data.newstaff && props.data.newstaff
		.map((person) => person.name)
		.join(', ');

	const quote = props.data.quote && (
		<div className={styles.quote}>
			<Title
				color='black'
				component='h6'
				size='small'
			>
				{props.data.quote.title}
			</Title>
			<Text>
				{props.data.quote.text}
			</Text>
		</div>
	);

	const version = props.data.version && (
		<div className={styles.version}>
			csssr&nbsp;
			<Link
				className={styles.versionLink}
				to={`/timeline/version/${props.data.version.number}`}
			>
				{props.data.version.text}
			</Link>
		</div>
	);

	const newStaffAvatars = props.data.newstaff && props.data.newstaff.map((person, index) => {

		const classList = cx({
			[styles.link]: true,
			[styles.link_disabled]: !person.histories && !person.wishes,
		});

		const img = (
			<img
				alt={person.name}
				className={styles.avatar}
				key={index}
				src={require(`images/timeline/avatar/${person.avatar}.jpg`)}
				style={{
					width: person.vip ? 148 : 148 - 16 * props.data.newstaff.length,
					height: person.vip ? 148 : 148 - 16 * props.data.newstaff.length,
				}}
				title={person.name}
			/>
		);

		return (
			<Link
				className={classList}
				key={index}
				to={`/timeline/${person.avatar}`}
			>
				{img}
			</Link>
		);
	});

	let description;
	if (props.data.description) {
		description = <ReactMarkdown className={styles.description} source={props.data.description} />;
	}

	let readLink;
	if (props.data.readLink) {
		readLink = (
			<div className={styles.readLink}>
				{props.data.readLink && (
					<Button
						component='a'
						href={props.data.readLink}
						target='_blank'
					>{props.data.buttonName}</Button>
				)}
			</div>
		);
	}

	let date;
	if (props.data.date) {
		date = (
			<div className={styles.date}>
				{props.data.date}
			</div>
		);
	}

	const newStaff = props.data.newstaff && (
		<div className={styles.avatars}>
			{newStaffAvatars}
		</div>
	);

	const classList = cx({
		[styles.root]: true,
		[styles.root_with_iconCount]: props.data.newstaff,
		[styles.root_with_iconStar]: !props.data.newstaff,
	});

	const newstaff = props.data.newstaff;

	return (
		<li className={classList}>
			{date}
			<div className={styles.title}>
				<Title component='h6' size='small'>
					{names || props.data.event}
				</Title>
			</div>
			{description}
			{newStaff}
			{images && <div className={styles.images}>{images}</div>}
			{readLink}
			{version}
			{props.data.audio && <AudioButton url={props.data.audio} />}
			{quote}
			{newstaff ? <div className={styles.iconCount}>
				{newstaff.length}
			</div> : <span className={styles.iconStar}>
				<Icon icon='timeline-star' />
			</span>}
		</li>
	);
}

TimelineItem.propTypes = {
	data: React.PropTypes.object.isRequired,
};

export default withStyles(TimelineItem, styles);
