import React from "react";
import "./Card.css";

function Card({ avatar_url, name, company, login, html_url }) {
  return (
    <div className="card">
      <img src={avatar_url} alt="" className="card-image" />
      <div className="card-description-wrapper">
        <a
          href={html_url}
          className="card-link"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="card-heading">{name || login}</h2>
        </a>
        <p className="card-company">{company || "Unknown"}</p>
      </div>
    </div>
  );
}

export default Card;
