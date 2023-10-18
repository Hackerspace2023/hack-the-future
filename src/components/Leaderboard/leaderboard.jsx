import React from "react";
import "./leaderboard.css";
import LeaderBoardList from "./LeaderBoardList";
import { LeaderBoard } from "./data";

export const Leaderboard = () => {
  return (
    <div>
      <div className="lgx-page-wrapper">
        <h1>
          <center>Paridhi'23 Leaderboard</center>
        </h1>
        <br />
        <table>
          <LeaderBoardList items={LeaderBoard} />
        </table>
      </div>
    </div>
  );
};
