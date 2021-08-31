import React from "react";

export default function Header() {
  return (
    <>
      <nav>
          <div className="header__container" >
            <div className="header__container--logo" >
              <img src="" alt="Logo" />
            </div>
            <div className="header__container--menu" >
              <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Portafolio</li>
                <li>Work Experience</li>
              </ul>
            </div>
          </div>
      </nav>
    </>
  );
}
