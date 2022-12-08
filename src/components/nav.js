import * as React from "react";
import Path from "./path";

export default function Nav() {
  return (
    <header className="container pv-sm fixed top-0 body z-1000 b-light">
      <nav className="row">
        <div className="cell-12 justify-between">
          <div className="uppercase font-bold">
            <Path to="/">Thomas Drapeau</Path>
          </div>
          <menu>
            <li>
              <a
                className="c-dark body"
                href="mailto:drapeau.th@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </li>
          </menu>
        </div>
      </nav>
    </header>
  );
}
