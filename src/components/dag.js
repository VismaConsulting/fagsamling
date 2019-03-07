import React from "react"
import Programpost from "../components/programpost";
import {DateTime} from 'luxon'

const capitalizeFirst = function(dag) {
    return dag.charAt(0).toUpperCase() + dag.slice(1)
}

const Dag = ({dag, poster}) => {
    return (
        <div>
            <h2>{capitalizeFirst(DateTime.fromISO(dag).setLocale('nb').toFormat('EEEE'))}</h2>
            {poster.map(edge => {
                return <Programpost key={edge.node.id} post={edge.node} />
            })}
        </div>
    )
};
export default Dag
