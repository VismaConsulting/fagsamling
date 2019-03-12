import React from "react"
import Programpost from "../components/programpost";


const capitalizeFirst = function(dag) {
    return dag.charAt(0).toUpperCase() + dag.slice(1)
};

const Dag = ({dag, poster, underposter}) => {
    return (
        <div className="col-sm">
            <h2>{capitalizeFirst(DateTime.fromISO(dag).setLocale('nb').toFormat('EEEE'))}</h2>
            {poster.map(edge => {
                return <Programpost key={edge.node.id} post={edge.node} underposterForDag={underposter} />
            })}
        </div>
    )
};
export default Dag
