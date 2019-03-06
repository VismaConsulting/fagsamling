import React from "react"
import Programpost from "../components/programpost";

const Dag = ({dag, poster}) => {
    return (
        <div>
            <h2>{dag}</h2>
            {poster.map(edge => {
                return <Programpost key={edge.node.id} post={edge.node} />
            })}
        </div>
    )
};
export default Dag
