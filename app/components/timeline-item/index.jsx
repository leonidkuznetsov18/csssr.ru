import React from 'react';

import './styles.css';
//import cx from 'classnames';
import Button from 'components/button';
import Icon from 'components/icon';
import ReactMarkdown from 'react-markdown';

function getIcon(props){
    if(props.data.newstaff) return (
        <div className="timeline__icon_type_count">
            + {props.data.newstaff.length}
        </div>
    );
    return (
        <Icon className="timeline__icon_type_star" icon="timeline-star"/>
    );
}

export default function TimelineItem(props) {
    var classList = "timeline__item";

    const images = props.data.images ? props.data.images.map(function (tag,index)
        {
          return (
            <img className="timeline__images" src={'http://csssr.ru/'+tag.url} width={tag.width} height={tag.height} key={index}/>
        );
    }) : null;

    const names =props.data.newstaff ? props.data.newstaff.map(person => person.name).join(', ') : null;

    const quote = props.data.quote ? (
             <div className="timeline__quote">
                 <span>{props.data.quote.title}</span>
                 <p>{props.data.quote.text}</p>
             </div>
        ) : null;

    const audio = props.data.audio ? (
        <div className="timeline__audio">
            <audio>
                <source src={'http://csssr.ru/' + props.data.audio.aac}/>
                <source src={'http://csssr.ru/' + props.data.audio.mp3}/>
                <source src={'http://csssr.ru/' + props.data.audio.ogg}/>
            </audio>
        </div>
    ) : null;

    const version = props.data.version ? (
        <div className="timeline__version">
            csssr
            <a href={'http://csssr.ru/' + props.data.version.url}> {props.data.version.text}</a>
        </div>
    ) : null;

    const newStaffAvatars = props.data.newstaff ? props.data.newstaff.map((person,index) => (
        <img className="timeline__avatar" src={'http://csssr.ru/' + person.avatar.src} alt={person.avatar.name} title={person.avatar.name} width={person.avatar.width} height={person.avatar.height} key={index}/>
    )): null;

    const newStaff = props.data.newstaff ? (
        <div className="timeline__info-persons">
            <div className="timeline__names">
                {names}
            </div>
            <div className="timeline__avatars">
                {newStaffAvatars}
            </div>
        </div>
    ) : null;

    if (props.data.newstaff){
        classList+=" timeline__with-icon-count"
    } else {
        classList+=" timeline__with-icon-star"
    }
    return (
        <li className={classList}>
            <div className="timeline__date">
                {props.data.date}
            </div>
            <div className="timeline__event">
                {props.data.event}
            </div>
            {newStaff}
            <div className="timeline__images">
                {images}
            </div>
            <div className="timeline__description">
                <ReactMarkdown source={props.data.description}/>
            </div>
            <div className="timeline__readLink">
                {props.data.readLink ? <Button to={props.data.readLink}>{props.data.buttonName}</Button> : null}
            </div>
                {version}
                {audio}
                {quote}
            {getIcon(props)}
        </li>
    );
}
