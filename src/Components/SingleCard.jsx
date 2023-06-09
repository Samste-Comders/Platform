import React from "react";
import "./LeaderBoard.css"
const SingleCard = ({ idx, username, marks, time }) => {
  console.log(username, marks);

  return (
    <div
      className="lead-content-card"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 7,
      }}
    >
      <div className="lead-IDX">
        {idx === 1 ? (
          <img
            height="50rem"
            src="https://res.cloudinary.com/dw4sflimb/image/upload/v1674967446/META2K23/first-place-medal_cntzpn.png"
            alt="#1"
          />
        ) : idx === 2 ? (
          <img
            height="50rem"
            src="https://res.cloudinary.com/dw4sflimb/image/upload/v1674967447/META2K23/second-place-medal_yhisoz.png"
            alt="#2"
          />
        ) : idx === 3 ? (
          <img
            height="50rem"
            src="https://res.cloudinary.com/dw4sflimb/image/upload/v1674967449/META2K23/third-place-medal_nsmnys.png"
            alt="#3"
          />
        ) : (
          <h4>#{idx}</h4>
        )}
      </div>
      <div className="lead-UserName">
        <h4>{username}</h4>
      </div>
      <div className="lead-User" style={{display:"flex"}}>
        <h4>
          {marks}{" "}
        </h4>
          <img
            height="30rem"
            style={{marginTop:"1.5rem",marginLeft:"0.5rem"}}
            src="https://res.cloudinary.com/dw4sflimb/image/upload/v1674966979/META2K23/perspective_matte-92-128x128_mxwjgu.png"
            alt="🏆"
          />{" "}
      </div>
      <div className="lead-User">
        <h4>{time ? time : 0}</h4>
      </div>
    </div>
  );
};

export default SingleCard;