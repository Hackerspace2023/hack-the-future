import React from "react";
import './leaderboard.css';
import LeaderBoardList from "./LeaderBoardList";

export const Leaderboard = () => {
    const LeaderBoard = [{
    //     id: "t-1",
    //     row1: "Features",
    //     row2: "Basic",
    //     row3: "Pro"
    // }, {
        id: "t-2",
        row1: "Sample text",
        row2: "Sample text",
        row3: "Sample text",
    }, {
        id: "t-3",
        row1: "Sample text",
        row2: "Sample text",
        row3: "Sample text",
    }, {
        id: "t-4",
        row1: "Sample text",
        row2: "Sample text",
        row3: "Sample text",
    },]
    return (
        <div>
            <div className="lgx-page-wrapper">
                <h1>
                    <center>Paridhi'23 Leaderboard</center>
                </h1>
                <br/>
                <table>
                    <LeaderBoardList items={LeaderBoard}/>
                </table>
            </div>
        </div>
    )
};
