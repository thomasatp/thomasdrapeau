import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Path({ to, children, className }) {
  return (
    <AniLink
      cover
      direction="right"
      bg="#f4f4f4"
      className={`${className} c-dark`}
      to={to}
    >
      {children}
    </AniLink>
  );
}
