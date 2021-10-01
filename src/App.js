import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const [profiles, setProfiles] = useState([]);

  function appendProfile(profileData) {
    setProfiles((previousState) => [...previousState, profileData]);
  }

  return (
    <div className="app">
      <h1>GitHub Cards</h1>
      <Form onSubmit={appendProfile}></Form>
      <CardList profiles={profiles}></CardList>
      <Footer></Footer>
    </div>
  );
}

export default App;
