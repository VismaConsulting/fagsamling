import React from "react"
import {Link} from "gatsby"
import './list-group-programpost-overrides.css'
import {DateTime} from 'luxon'
import EventMetaData from './EventMetaData'
import ConditionalStar from './ConditionalStar';
import eventSort from "../../utils/eventSort";
import classnames from 'classnames'

const InlineEvent = ({event}) => {
    const {frontmatter} = event;

    const tidspunkt = DateTime.fromISO(frontmatter.from).setLocale('nb').toFormat('HH:mm');
    const underposterAaVise = event.fields.subevents;
    return (
        <div className="card programpost" style={
            {
                marginBottom: '10px',
                border: 'none',
                backgroundColor: '#F0F2F5',
            }}>
            <div className="card-body inline-event-card" style={{paddingBottom: '5px'}}>
                <h6><a href={event.fields.slug}>{tidspunkt} - {frontmatter.title}</a></h6>
                <EventMetaData {...frontmatter} />
                <p style={{fontSize: '0.9em'}}>{frontmatter.description}</p>
                {underposterAaVise.length > 0 && <ul className="list-group" style={{paddingBottom: '10px'}}>
                    {underposterAaVise
                        .sort(eventSort)
                        .map(subevent => {
                            const style = {
                                fontSize: '0.9em',
                                fontWeight: subevent.frontmatter.category === 'Breakout session' ? '500' : 'normal'
                            };
                            const parentCrumb = {
                                label: event.frontmatter.title,
                                slug: event.fields.slug
                            };
                            const from = subevent.frontmatter.from.split('T')[1];
                            const divergingTime = from !== tidspunkt ? from + " -" : null;
                            const itemClassname = classnames(
                                'list-group-item',
                                'list-group-item-action',
                                'd-flex',
                                'justify-content-between',
                                'align-items-center'
                            )
                            return <Link key={subevent.id}
                                         state={{parentCrumb}}
                                         to={subevent.fields.slug}
                                         className={itemClassname}
                                         style={{fontSize: style.fontSize, backgroundColor: '#eceef1', fontWeight: style.fontWeight
                                         }}>
                                {divergingTime} {subevent.frontmatter.title}

                                <div style={{display: 'inline-block'}} className="d-flex">
                                    <span className="badge" style={{fontSize: '0.8em'}}>
                                        <ConditionalStar category={subevent.frontmatter.category} />
                                    </span>
                                    <span className="badge badge-primary" style={{fontSize: '0.7em', marginRight: '2px'}}>
                                        {subevent.frontmatter.group}
                                    </span>
                                    <span className="badge badge-secondary" style={{fontSize: '0.7em', marginRight: '2px'}}>
                                        {subevent.frontmatter.speaker}
                                    </span>
                                    <span className="badge badge-info" style={{fontSize: '0.7em', marginRight: '2px'}}>
                                        {subevent.frontmatter.location}
                                    </span>
                                </div>
                            </Link>
                    })}
                </ul>}
            </div>
        </div>
    )
};
export default InlineEvent
