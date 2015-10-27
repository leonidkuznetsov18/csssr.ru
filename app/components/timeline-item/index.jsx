import React from 'react';

import './styles.css';
//import cx from 'classnames';
import Button from 'components/button';
import Icon from 'components/icon';

export default function TimelineItem(props) {
    var classList = "timeline__item";

    var images = props.data.images ? props.data.images.map(function (tag,index) 
        {
          return (
            <img className="timeline__images" src={'http://csssr.ru/'+tag.url} width={tag.width} height={tag.height} key={index}/>
        );
    }) : null;

    var names =props.data.newstaff ? props.data.newstaff.map(person => person.name).join(', ') : null;

    var newStaffAvatars = props.data.newstaff ? props.data.newstaff.map((person,index) => (
        <img className="timeline__avatar" src={'http://csssr.ru/' + person.avatar} key={index}/>
    )): null;

    var newStaff = props.data.newstaff ? (
        <div className="timeline__info-persons">
            <div className="timeline__names">
                {names}
            </div>
            <div className="timeline__avatars">
                {newStaffAvatars}
            </div>
        </div>
    ) : null;


    if (props.data.date){
        classList+=" timeline__item_type_date"
    }
    else if (props.data.event){
        classList+=" timeline__item_type_event"
    }
     else if (props.data.readLink){
        classList+=" timeline__item_type_readLink"
    }
    else if (props.data.newstaff){
        classList+=" timeline__item_type_newStaff"
    }
    else if (props.data.images){
        classList+=" timeline__item_type_images"
    }
    return (
        <li className={classList}>
            <div className="timeline__date">
                {props.data.date}
            </div>
            <div className="timeline__event">
                {props.data.event}
            </div>
            <div className="timeline__readLink">
                {props.data.readLink ? <Button to={props.data.readLink}>{props.data.buttonName}</Button> : null}
            </div>
            {newStaff}
            <div className="timeline__images">
                {images}
            </div>
        </li>
    );
}
