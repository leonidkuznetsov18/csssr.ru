import React from 'react';

import './styles.css';
//import cx from 'classnames';
import Button from 'components/button';
export default function TimelineItem(props) {
    var classList = "timeline__item";
    if (props.data.event){
        classList+=" timeline__item_type_event"
    }
    return (
        <li className={classList}>
            <div className="timeline__date">
                {props.data.readLink ? <Button to={props.data.readLink}>{props.data.buttonName}</Button> : null}
            </div>
            <div className="timeline__date">
                {props.data.event}
            </div>
        </li>
    );
}
