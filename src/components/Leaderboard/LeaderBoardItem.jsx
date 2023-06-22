import React from "react";
import "./LeaderBoardItem.css";

const LeaderBoardItem = props => {
    return (
        <tbody>
        <tr>
            <td>{props.row1}</td>
            <td>{props.row2}</td>
            <td>{props.row3}</td>
        </tr>
        </tbody>
    )
}
export default LeaderBoardItem;