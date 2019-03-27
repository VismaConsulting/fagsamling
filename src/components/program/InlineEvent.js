import React from "react"
import './list-group-programpost-overrides.css'
import {DateTime} from 'luxon'
import EventMetaData from './EventMetaData'

const eventSort = (a, b) => {
    let result = 0;
    if (a.frontmatter.group && b.frontmatter.group) {
        result = a.frontmatter.group.localeCompare(b.frontmatter.group)
    }
    return result;

};

const InlineEvent = ({event}) => {
    const {frontmatter} = event;

    const tidspunkt = DateTime.fromISO(frontmatter.from).setLocale('nb').toFormat('HH:mm');
    const underposterAaVise = event.fields.subevents;
    return (
        <div className="card programpost" style={{marginBottom: '10px', border: 'none', backgroundColor: '#F0F2F5'}}>
            <div className="card-body" style={{paddingBottom: '5px'}}>
                <h6><a href={event.fields.slug}>{tidspunkt} - {frontmatter.title}</a></h6>
                <EventMetaData {...frontmatter} />
                <p style={{fontSize: '0.8em'}}>{frontmatter.description}</p>
                <div>
                    {underposterAaVise
                        .sort(eventSort)
                        .map(subevent => {
                            const style = {
                                fontSize: '0.7em',
                                fontWeight: subevent.frontmatter.category === 'Breakout session' ? 'bold' : 'normal'
                            };
                            const fra = subevent.frontmatter.from.split('T')[1];
                            const til = subevent.frontmatter.to.split('T')[1];
                            return <div style={{fontSize: style.fontSize}} key={subevent.id}>
                            {fra}-{til} <a style={{fontWeight: style.fontWeight}} href={subevent.fields.slug}>{subevent.frontmatter.title}</a>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
};
export default InlineEvent
