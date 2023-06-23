import React from "react";
import LeaderBoardItem from "./LeaderBoardItem";
import './LeaderBoardList.css'

const LeaderBoardList = props => {
    return (
        <table>
            <tr>
                <th>Features</th>
                <th>Basic</th>
                <th>Pro</th>
            </tr>

            {props.items.map(Leader => (
                <LeaderBoardItem key={Leader.id} id={Leader.id} row1={Leader.row1}
                                 row2={Leader.row2}
                                 row3={Leader.row3}/>
            ))}</table>
    )
};
export default LeaderBoardList;