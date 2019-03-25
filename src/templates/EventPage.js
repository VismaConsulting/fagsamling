import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout/Layout"
import {DateTime} from 'luxon'
import EventMetaData from "../components/program/EventMetaData";
import '../components/graphql/fragments/CommonEventFragment'

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
            </div>
        </Layout>
    )
}

export const query = graphql`  
query($slug: String!) {
    event: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        subevents {
          ...CommonEventFragment
        }
      }
      ...CommonEventFragment
  }
}
  
  
`