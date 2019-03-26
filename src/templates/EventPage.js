import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout/Layout"
import {DateTime} from 'luxon'
import EventMetaData from "../components/program/EventMetaData";
import '../components/graphql/fragments/CommonEventFragment'
import Img from "gatsby-image"

const capitalizeFirst = function (dag) {
    return dag.charAt(0).toUpperCase() + dag.slice(1)
};

export default ({data}) => {
    const {event} = data;
    const weekday = capitalizeFirst(DateTime.fromISO(event.frontmatter.from).setLocale('nb').toFormat('EEEE'));

    function formatTime(time) {
        return DateTime.fromISO(time).toFormat('HH:mm');
    }

    const from = formatTime(event.frontmatter.from);
    const to = formatTime(event.frontmatter.to);
    return (
        <Layout>
            <div>
                <h3 style={{color: 'black'}}>{weekday} {from} - {to}</h3>
                <h2>{event.frontmatter.title}</h2>
                <EventMetaData {...event.frontmatter} />
                <div dangerouslySetInnerHTML={{__html: event.html}}/>
                {event.fields.subevents.map(subevent => {
                    return (
                        <div key={subevent.id} className="card programpost" style={{marginBottom: '10px'}}>
                            <div className="card-body">
                                {formatTime(subevent.frontmatter.from)} - {formatTime(subevent.frontmatter.to)} {subevent.frontmatter.title}
                                <EventMetaData {...subevent.frontmatter} />
                                {subevent.excerpt}
                            </div>
                        </div>
                    )
                })}
                {event.fields.speakers.length > 0 && <div>
                    <h3>About the speaker</h3>
                    {event.fields.speakers.map(speaker => {
                        return (
                            <div className="container card" key={speaker.id}>
                                <div className="row card-body">
                                    <div className="col-2">
                                        <Img fixed={speaker.frontmatter.thumbnail.childImageSharp.fixed}/>
                                    </div>
                                    <div className="col-8">
                                        <h5>{speaker.frontmatter.name}</h5>
                                        <div dangerouslySetInnerHTML={{__html: speaker.html}}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        event: markdownRemark(fields: { slug: { eq: $slug } }) {
            fields {
                speakers {
                    id
                    html
                    frontmatter {
                        name
                        thumbnail {
                            childImageSharp {
                                fixed(width: 125, height: 125, cropFocus: NORTH) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
                subevents {
                    ...CommonEventFragment
                }
            }
            ...CommonEventFragment
        }
    }
`