import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Path({ to, children, className }) {
  return (
    <AniLink fade className={`${className} c-dark`} to={to}>
      {children}
    </AniLink>
  );
}
