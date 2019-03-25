import React from "react"
import './list-group-programpost-overrides.css'
import {DateTime} from 'luxon'
import EventMetaData from './EventMetaData'

const InlineEvent = ({event}) => {
    const {frontmatter} = event;

    const tidspunkt = DateTime.fromISO(frontmatter.from).setLocale('nb').toFormat('HH:mm');
    const underposterAaVise = event.fields.subevents;
    return (
        <div className="card programpost" style={{marginBottom: '10px', border: 'none', backgroundColor: '#F0F2F5'}}>
            <div className="card-body" style={{paddingBottom: '5px'}}>
                <h6><a href={event.fields.slug}>{tidspunkt} - {frontmatter.title}</a></h6>
                <EventMetaData {...frontmatter} />
                <div>
                    {underposterAaVise.map(subevent => {
                        const fra = subevent.frontmatter.from.split('T')[1];
                        const til = subevent.frontmatter.to.split('T')[1];
                        return <div style={{fontSize: '0.7em'}} key={subevent.id}>
                            {fra}-{til} <a href={subevent.fields.slug}>{subevent.frontmatter.title}</a>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
};
export default InlineEvent
