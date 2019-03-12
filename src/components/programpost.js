import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarker, faUser} from '@fortawesome/free-solid-svg-icons'
import './list-group-programpost-overrides.css'
import {DateTime} from 'luxon'

const Programpost = ({post, underposterForDag = []}) => {
    const {frontmatter} = post;
    const tidspunkt = DateTime.fromISO(frontmatter.fra).setLocale('nb').toFormat('HH:mm');
    const underposterTilSiden = frontmatter.undersider || [];
    const underposterAaVise = underposterForDag.filter(underpost => underposterTilSiden.includes(underpost.node.fields.slug));
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
                    {frontmatter.sted && <li className="list-group-item">
                        <span className="badge"><FontAwesomeIcon icon={faMapMarker}/></span>
                        {frontmatter.sted}
                    </li>}
                </ul>
                <div>
                    {underposterAaVise.map(underpost => {
                        const fra = underpost.node.frontmatter.fra.split('T')[1];
                        const til = underpost.node.frontmatter.til.split('T')[1];
                        return <div style={{fontSize: '0.7em'}} key={underpost.node.fields.slug}>
                            {fra}-{til} <a href={underpost.node.fields.slug}>{underpost.node.frontmatter.title}</a>
                        </div>
                    })}
                </div>
                <p dangerouslySetInnerHTML={{__html: post.html}}/>
            </div>
        </div>
    )
};
export default Programpost
