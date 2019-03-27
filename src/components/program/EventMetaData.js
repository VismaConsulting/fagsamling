import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faLocationArrow, faUser, faUsers} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const EventMetaData = ({kategori, speaker, location, group}) => {
    return (
        <ul style={{marginBottom: '10px'}} className="list-group list-group-horizontal">
            {kategori &&
            <li className="list-group-item list-group-item-primary">
                {kategori}
            </li>}
            {speaker && <li className="list-group-item">
                <span className="badge"><FontAwesomeIcon icon={faUser}/></span>
                {speaker}
            </li>}
            {location && <li className="list-group-item">
                <span className="badge"><FontAwesomeIcon icon={faMapMarker}/></span>
                {location}
            </li>}
            {group && <li className="list-group-item">
                <span className="badge"><FontAwesomeIcon icon={faUsers}/></span>
                {group}
            </li>}
        </ul>
    );
}

export default EventMetaData