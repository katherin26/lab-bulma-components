import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import SignUp from "./signup/SignUp";
import Message from "./container/Message";

export default function App() {
  return (
    <div className="container is-fluid">
      <div className="App">
        <Navbar />
        <FormField namelabel="Name" emaillabel="Email" />
        <SignUp />
        <Message />
      </div>
    </div>
  );
}
