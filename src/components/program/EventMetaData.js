import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const EventMetaData = ({kategori, speaker, location}) => {
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
        </ul>
    );
}

export default EventMetaData