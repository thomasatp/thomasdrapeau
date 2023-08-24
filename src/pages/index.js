import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Tile from "../components/tile";
import { Seo } from "../components/seo";
import "@fontsource-variable/inter-tight";

function IndexPage() {
  return (
    <Layout>
      <div className="row">
        <h1 className="cell-5 cell-mt-8 cell-m-12 subheadline mv-xxl pt-xxl mt-pt-0">
          UX/UI designer<br></br> Développeur front end
        </h1>
        <div className="cell-12">
          <div className="row">
            <Tile
              to="/agence-kanji"
              title="Agence Kanji"
              subtitle="Création de site"
            >
              <StaticImage src="../images/kanji.jpg" alt="Kanji" />
            </Tile>
            <Tile to="/bench" title="Bench" subtitle="Projet personnel">
              <StaticImage src="../images/bench.jpg" alt="Bench" />
            </Tile>
            <Tile to="/todo" title="Todo App" subtitle="Projet personnel">
              <StaticImage src="../images/todo.jpg" alt="Todo App" />
            </Tile>
            <Tile
              to="/lacoste-checkout-refit"
              title="Lacoste"
              subtitle="Checkout refit"
            >
              <StaticImage
                src="../images/checkout.jpg"
                alt="Lacoste - Checkout refit"
              />
            </Tile>
            <Tile
              to="/lacoste-design-system"
              title="Lacoste"
              subtitle="Design system"
            >
              <StaticImage
                src="../images/designsystem.jpg"
                alt="Lacoste - Design system"
              />
            </Tile>
            {/* <Tile to="/valbiotis" title="Valbiotis" subtitle="UX Design">
              <StaticImage
                src="../images/designsystem.jpg"
                alt="Lacoste - Design system"
              />
            </Tile> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => (
  <Seo title="Homepage" description="UX/UI designer / Développeur front end" />
);
