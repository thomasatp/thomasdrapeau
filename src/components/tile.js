import * as React from "react";
import Path from "../components/path";

export default function Tile({ to, title, subtitle, children }) {
  return (
    <Path className="cell-6 cell-mt-12 mb-sm" to={to}>
      <div className="row">
        <div className="cell-12">
          <div className="pt-xxl ph-xl mt-pt-l mt-ph-m b-medium-light br-sm overflow-hidden">
            {children}
            <div className="row">
              <p className="cell-12 wrap mb-l mt-m body2 font-bold align-baseline">
                {title}
                <span className="body c-medium-dark font-regular ml-s mr-s">
                  –
                </span>
                <span className="body c-medium-dark font-regular">
                  {subtitle}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Path>
  );
}
