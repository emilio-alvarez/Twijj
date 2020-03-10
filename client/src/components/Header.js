import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <ul class="headList">
        <li class="headOption"><a class="headLink" href="">Test1</a></li>
        <li class="headOption"><a class="headLink" href="">Test2</a></li>
        <li class="headOption"><a class="headLink" href="">Test3</a></li>
      </ul>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
