import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <a className="logo">
          <img src="/react.svg" alt="logo" /> NASA
        </a>
      </div>
    </header>

  );
}
