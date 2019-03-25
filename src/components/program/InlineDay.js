import React from "react"
import InlineEvent from "./InlineEvent";
import {DateTime} from "luxon";

const capitalizeFirst = function(dag) {
    return dag.charAt(0).toUpperCase() + dag.slice(1)
};

const InlineDay = ({day, events}) => {
    return (
        <div className="col-sm">
            <h2>{capitalizeFirst(DateTime.fromISO(day).setLocale('nb').toFormat('EEEE'))}</h2>
            {events.map(event => {
                return <InlineEvent key={event.id} event={event} />
            })}
        </div>
    )
};
export default InlineDay
