import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ConditionalStar = ({category}) => {
    if (category !== 'Breakout session') {
        return null;
    }
    return <FontAwesomeIcon style={{color: 'gold', marginLeft: '3px'}} transform={{ rotate: 270 }} icon={faStar}/>
}

export default ConditionalStar;