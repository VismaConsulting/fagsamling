import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarker, faUser} from '@fortawesome/free-solid-svg-icons'
import './list-group-programpost-overrides.css'
import {DateTime} from 'luxon'

const InlineEvent = ({event, subeventsForDay = []}) => {
    const {frontmatter} = event;

    const tidspunkt = DateTime.fromISO(frontmatter.from).setLocale('nb').toFormat('HH:mm');
    const underposterTilSiden = frontmatter.undersider || [];
    const underposterAaVise = subeventsForDay.filter(underpost => underposterTilSiden.includes(underpost.fields.slug));
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
                        const fra = subevent.frontmatter.from.split('T')[1];
                        const til = subevent.frontmatter.to.split('T')[1];
                        return <div style={{fontSize: '0.7em'}} key={subevent.fields.slug}>
                            {fra}-{til} <a href={subevent.fields.slug}>{subevent.frontmatter.title}</a>
                        </div>
                    })}
                </div>
                <p dangerouslySetInnerHTML={{__html: event.html}}/>
            </div>
        </div>
    )
};
export default InlineEvent
