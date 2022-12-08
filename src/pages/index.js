import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Tile from "../components/tile";
import Seo from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <div className="row">
        <h1 className="cell-5 cell-mt-8 cell-m-12 subheadline mv-xxl pt-xxl mt-pt-0">
          UI designer et front end developer en devenir.
        </h1>
        <div className="cell-12">
          <div className="row">
            <Tile
              to="/agence-kanji"
              title="Agence Kanji"
              subtitle="Création de site"
            >
              <StaticImage
                src="../images/kanji.jpg"
                alt="Agence Kanji"
                placeholder="blurred"
                quality="100"
              />
            </Tile>
            <Tile to="/bench" title="Bench" subtitle="Projet personnel">
              <StaticImage
                src="../images/bench.jpg"
                alt="Bench"
                placeholder="blurred"
                quality="100"
              />
            </Tile>
            <Tile to="/todo" title="Todo App" subtitle="Projet personnel">
              <StaticImage
                src="../images/todo.jpg"
                alt="Todo App"
                placeholder="blurred"
                quality="100"
              />
            </Tile>
            <Tile
              to="/lacoste-checkout-refit"
              title="Lacoste"
              subtitle="Checkout refit"
            >
              <StaticImage
                src="../images/checkout.jpg"
                alt="Checkout refit"
                placeholder="blurred"
                quality="100"
              />
            </Tile>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => (
  <Seo
    title="Homepage"
    description="UI designer et front end developer en devenir."
  />
);
