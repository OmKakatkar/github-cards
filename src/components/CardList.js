import React from "react";
import Card from "./Card";
import "./CardList.css";

function CardList({ profiles }) {
  return (
    // <div className='cards-wrapper'>
      <div className="cards">
        {profiles.map((profile) => (
          // Here, the profile variable is an object
          // So, when we pass props using the spread operator for an object, we are actually sending key value pairs
          <Card {...profile} key={profile.id} />
        ))}
      </div>
    // </div>
  );
}

export default CardList;
