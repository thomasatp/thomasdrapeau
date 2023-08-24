import * as React from "react";
import Nav from "./nav";
import "../style/styles.scss";
import "@fontsource-variable/inter-tight";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="container">{children}</main>
    </>
  );
}
