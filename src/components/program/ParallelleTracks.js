import React from "react"
import './list-group-programpost-overrides.css'
import {DateTime, Interval} from 'luxon'
import groupBy from "../../utils/groupBy";

function formatTime(time) {
    return DateTime.fromISO(time).toFormat('HH:mm');
}

const ParallelleTracks = ({event}) => {

    const byLocation = groupBy(event.fields.subevents, event => event.frontmatter.location);
    const pointsInTime = Array.from(new Set(event.fields.subevents
        .flatMap(subevent => [subevent.frontmatter.from, subevent.frontmatter.to])
        .map(pointInTime => formatTime(pointInTime))))
        .sort((a, b) => a.localeCompare(b));
    const pointsWithDurations = []
    for (let i = 0; i < pointsInTime.length; i++) {
        const pointInTime = pointsInTime[i]
        const nextPointInTime = pointsInTime[i + 1] || '24:00';
        const interval = Interval.fromDateTimes(DateTime.fromISO(pointInTime), DateTime.fromISO(nextPointInTime));
        const durationInMinutes = interval.count('minutes');
        pointsWithDurations.push({
            pointInTime, durationInMinutes
        })
    }
    return (
        <div>
            <h1>Parallelle tracks</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 ml-md-auto">
                        <h5>Tidspunkt</h5>
                        {pointsWithDurations.map(pointInTime => {
                            const height = (pointInTime.durationInMinutes * 3) + 'px'
                            return (
                                <div key={pointInTime.pointInTime} style={{height}}>
                                    {pointInTime.pointInTime}
                                </div>
                            )
                        })}
                    </div>
                    {Array.from(byLocation, ([key, value]) => {
                        return (
                            <div className="col-sm-1 ml-md-auto" key={key}>
                                <h5>{key}</h5>
                                {value.map(event => {
                                    const interval = Interval.fromDateTimes(DateTime.fromISO(event.frontmatter.from), DateTime.fromISO(event.frontmatter.to));
                                    const durationInMinutes = interval.count('minutes');
                                    const height = (durationInMinutes * 3) + 'px'
                                    return <div className="card" key={event.id} style={{height}}>
                                        <div className="card-body">
                                            {event.frontmatter.title}
                                        </div>
                                    </div>
                                })}
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
};
export default ParallelleTracks
