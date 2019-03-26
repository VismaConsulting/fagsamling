import React from "react"
import './list-group-programpost-overrides.css'
import {DateTime} from 'luxon'
import groupBy from "../../utils/groupBy";

function formatTime(time) {
    return DateTime.fromISO(time).toFormat('HH:mm');
}

const ParallelleTracks = ({event}) => {

    const byLocation = groupBy(event.fields.subevents, event => event.frontmatter.location);

    return (
        <div>
            <h1>Parallelle tracks</h1>
            {Array.from(byLocation, ([key, value]) => {
                console.log(key)
                return (
                    <div key={key}>
                        <h3>{key}</h3>
                        {value.map(event => {
                            return <div key={event.id}>
                                {event.frontmatter.title}
                            </div>
                        })}
                    </div>
                )
            })
            }
        </div>
    )
};
export default ParallelleTracks
