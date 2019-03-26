import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout/Layout"
import {DateTime} from 'luxon'
import EventMetaData from "../components/program/EventMetaData";
import '../components/graphql/fragments/CommonEventFragment'
import Img from "gatsby-image"

const capitalizeFirst = function (dag) {
    return dag.charAt(0).toUpperCase() + dag.slice(1)
};

function build_breadcrumbs(location, event) {
    const parentCrumb = location.state ? location.state.parentCrumb : null
    const breadcrumbs = [
        {
            label: "Program",
            slug: "/program"
        }];
    if (parentCrumb !== null) {
        breadcrumbs.push(parentCrumb);
    }
    breadcrumbs.push(
        {
            label: event.frontmatter.title,
            slug: event.fields.slug,
            current: true
        });
    return breadcrumbs;
}

export default ({location, data}) => {
    const {event} = data;
    const weekday = capitalizeFirst(DateTime.fromISO(event.frontmatter.from).setLocale('nb').toFormat('EEEE'));

    function formatTime(time) {
        return DateTime.fromISO(time).toFormat('HH:mm');
    }

    const from = formatTime(event.frontmatter.from);
    const to = formatTime(event.frontmatter.to);
    const breadcrumbs = build_breadcrumbs(location, event);
    return (
        <Layout breadcrumbs={breadcrumbs}>
            <div>
                <h3 style={{color: 'black'}}>{weekday} {from} - {to}</h3>
                <h2>{event.frontmatter.title}</h2>
                <EventMetaData {...event.frontmatter} />
                <div dangerouslySetInnerHTML={{__html: event.html}}/>
                {event.fields.subevents.map(subevent => {
                    const parentCrumb = {
                        label: event.frontmatter.title,
                        slug: event.fields.slug
                    };
                    return (
                        <div key={subevent.id} className="card programpost" style={{marginBottom: '10px'}}>
                            <div className="card-body">
                                <h6 className="card-title">
                                    {formatTime(subevent.frontmatter.from)} - {formatTime(subevent.frontmatter.to)} {subevent.frontmatter.title}
                                </h6>
                                <div className="card-subtitle">
                                    <EventMetaData {...subevent.frontmatter} />
                                </div>
                                <div className="card-text">
                                    {subevent.excerpt}
                                </div>
                                <Link state={{parentCrumb}} className="card-link btn btn-primary"
                                      to={subevent.fields.slug}>Gå til event</Link>
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
                                    <div className="col-sm-2">
                                        <Img fixed={speaker.frontmatter.thumbnail.childImageSharp.fixed}/>
                                    </div>
                                    <div className="col-sm-10">
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