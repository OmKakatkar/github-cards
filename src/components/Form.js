import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Form.css";

function Form(props) {
  const [text, setText] = useState("");

  function changeText(e) {
    setText(e.target.value);
  }

  async function fetchUser(event) {
    event.preventDefault();
    setText("")
    let resp = await axios
      .get(`https://api.github.com/users/${text}`)
      .catch(console.log("User Not Found"));
    props.onSubmit(!resp.data.length ? resp.data : null);
  }

  return (
    <form className="form" onSubmit={fetchUser}>
      <input
        type="text"
        placeholder="Search UserName"
        value={text}
        onChange={(e) => changeText(e)}
        className="form-input"
      />
      <button className="form-button">Add</button>
    </form>
  );
}

export default Form;
