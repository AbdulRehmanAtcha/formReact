import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <body>
      <div className="left">
      </div>
      <div className="right">
        <div className="right-top">
          <h2>Login to continue</h2>
        </div>
        <div className="right-inputs">
          <input placeholder="Email"></input>
          <input placeholder="Password"></input>
        </div>
        <div className="right-after-input">
          <div className="right-after-input-left">
            <input type="checkbox"></input><span>Remember me</span>
          </div>
          <div className="right-after-input-right">
            <span>Forgot Password?</span>
          </div>
        </div>
        <div className="right-last-button">
          <button>LOGIN</button>
        </div>
        <div className="right-last">
          <div className="right-footer">
            <p>or sign up using</p>
          </div>
          <div className="right-icons">
            <div className="facebook"></div>
            <div className="twitter"></div>
          </div>
        </div>
      </div>
    </body>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
