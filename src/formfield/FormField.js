import React from "react";
import "bulma/css/bulma.css";
import "./FormField.css";
import CoolButton from "../coolbutton/CoolButton";

export default function FormField(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="field">
          <label className="label">{props.namelabel}</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>

        <div className="field">
          <label className="label">{props.emaillabel}</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
          </div>
        </div>

        <CoolButton name="Login" type="danger" isRounded={true} size="small" />

        <CoolButton name="Save" type="info" isRounded={false} size="medium" />
      </div>
    </React.Fragment>
  );
}
