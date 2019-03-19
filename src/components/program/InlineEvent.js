import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarker, faUser} from '@fortawesome/free-solid-svg-icons'
import './list-group-programpost-overrides.css'
import {DateTime, Interval} from 'luxon'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment';

const InlineEvent = ({event, subeventsForDay = []}) => {
    const {frontmatter} = event;

    const tidspunkt = DateTime.fromISO(frontmatter.from).setLocale('nb').toFormat('HH:mm');
    const underposterTilSiden = frontmatter.subevents || [];
    const underposterAaVise = subeventsForDay.filter(underpost => underposterTilSiden.includes(underpost.fields.slug));

    const groups = [];
    underposterAaVise.forEach(subevent => {
        if (groups.filter(group => group.id === subevent.frontmatter.location).length === 0) {
            groups.push({
                id: subevent.frontmatter.location,
                title: subevent.frontmatter.location,
                stackItems: true
            });
        }
    });
    const items = underposterAaVise.map(subevent => {
        return {
            id: subevent.fields.slug,
            group: subevent.frontmatter.location,
            title: subevent.frontmatter.title,
            start_time: moment(subevent.frontmatter.from),
            end_time: moment(subevent.frontmatter.to),
            canMove: false,
            canResize: false,
            stackItems: true
        }
    });

    const overallStartTime = underposterAaVise.map(subevent => subevent.frontmatter.from).reduce((min, n) => n < min ? n : min, '2099-01-01T00:00');
    const overallEndTime = underposterAaVise.map(subevent => subevent.frontmatter.to).reduce((max, n) => n > max ? n : max, '1970-01-01T00:00');

    return (
        <div className="card programpost" style={{marginBottom: '10px', border: 'none', backgroundColor: '#F0F2F5'}}>
            <div className="card-body" style={{paddingBottom: '5px'}}>
                <h6>{tidspunkt} - {frontmatter.title}</h6>
                <ul style={{marginBottom: '10px'}} className="list-group list-group-horizontal">
                    {frontmatter.kategori &&
                    <li className="list-group-item list-group-item-primary">
                        {frontmatter.kategori}
                    </li>}
                    {frontmatter.speaker && <li className="list-group-item">
                        <span className="badge"><FontAwesomeIcon icon={faUser}/></span>
                        {frontmatter.speaker}
                    </li>}
                    {frontmatter.location && <li className="list-group-item">
                        <span className="badge"><FontAwesomeIcon icon={faMapMarker}/></span>
                        {frontmatter.location}
                    </li>}
                </ul>
                <div>
                    {underposterAaVise.map(subevent => {
                        const from = DateTime.fromISO(subevent.frontmatter.from);
                        const to = DateTime.fromISO(subevent.frontmatter.to);
                        return <div style={{fontSize: '0.8em'}} key={subevent.fields.slug}>
                            {from.toFormat('HH:mm')}-{to.toFormat('HH:mm')} <a
                            href={subevent.fields.slug}>{subevent.frontmatter.title}</a>
                        </div>
                    })}
                </div>
                {underposterAaVise.length > 0 && <div className="container">
                    <div className="row">
                        <Timeline
                            groups={groups}
                            items={items}
                            sidebarContent={<div/>}
                            visibleTimeStart={moment(overallStartTime)}
                            visibleTimeEnd={moment(overallEndTime)}
                        />
                    </div>
                </div>}
                <p dangerouslySetInnerHTML={{__html: event.html}}/>
            </div>
        </div>
    )
};
export default InlineEvent
