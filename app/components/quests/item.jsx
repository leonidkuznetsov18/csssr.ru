import React, { Component, PropTypes as pt } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Field from 'components/field';
import Link from 'components/link';
import Title from 'components/title';
import Text from 'components/text';
import newlineToBr from 'utils/newline-to-br';

import styles from './styles.css';

class QuestsItem extends Component {
	static propTypes = {
		id: pt.string.isRequired,
		link: pt.string.isRequired,
		linkText: pt.string.isRequired,
		onChange: pt.func,
		taskLink: pt.string.isRequired,
		taskText: pt.string.isRequired,
		text: pt.string.isRequired,
		time: pt.number.isRequired,
		title: pt.string.isRequired,
	}

	static defaultProps = {
		onChange: () => {},
	}

	onChangeField = (name) => (event) =>
		this.props.onChange(this.props.id, {
			[name]: event.target.value,
		})

	handleChangeText = this.onChangeField('text')

	handleChangeLink = this.onChangeField('link')

	render() {
		const {
			time,
			taskLink,
			taskText,
			linkText,
			title,
			text,
			link,
		} = this.props;

		return (
			<div className={styles.quest}>
				<div className={styles.body}>
					<div className={styles.title}>
						<Title
							component='h4'
							indent={false}
							size='smallMedium'
						>
							{title}
						</Title>
					</div>
					<div className={styles.taskLink}>
						<Link href={taskLink} target='_blank'>
							{taskLink}
						</Link>
					</div>
					<div className={styles.text}>
						<Text
							indent={false}
							size='m'
						>
							{newlineToBr(taskText)}
						</Text>
					</div>
					<div className={styles.field}>
						<Field
							maxLength='4096'
							name={'text'}
							onChange={this.handleChangeText}
							type={'textarea'}
							value={text}
						/>
					</div>

					<div className={styles.text}>
						<Text
							indent={false}
							size='m'
						>
							{newlineToBr(linkText)}
						</Text>
					</div>
					<div className={styles.field}>
						<Field
							maxLength='256'
							name={'link'}
							onChange={this.handleChangeLink}
							value={link}
						/>
					</div>
				</div>
				<div className={styles.meta}>
					<div className={styles.time}>
						~ {time}
						<br />
						минуты
					</div>
					<div className={styles.metaText}>
						потребуется
						<br />
						на решение
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(QuestsItem, styles);
