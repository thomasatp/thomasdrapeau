import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { LinkNext } from "grommet-icons";
import { Github } from "grommet-icons";
import colors from "../utils/colors";

function Page() {
  const title = "Lacoste Checkout refit";
  const role = "UI Design";
  const tags = ["Figma"];
  const link = "https://www.lacoste.com/fr/";
  const image = "../images/checkout.jpg";
  const repo = { exist: false, link: "" };
  const description = "Refonte du tunnel de commande de Lacoste";

  return (
    <Layout>
      <div className="row mv-xxl pt-xxl mt-pt-0 align-baseline">
        <div className="cell-6 cell-mt-12">
          <div className="row">
            <h1 className="cell-12 subheadline mb-sm">{title}</h1>
            <h2 className="cell-12 body mb-m">{role}</h2>
            <div className="cell-12 wrap">
              {tags.sort().map((tag, index) => (
                <p key={index} className="caption border br-l ph-s mr-xs mb-xs">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="cell-6 cell-mt-12 subtitle mt-l">
          <div className="row">
            <p className="cell-12 mb-m">{description}</p>
            <div className="cell-12">
              <a
                className="flex c-dark body font-bold align-center"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Voir le site
                <LinkNext
                  className="ml-s mt-xxs"
                  size="small"
                  color={colors.dark}
                />
              </a>
              {repo.exist ? (
                <a
                  className="flex c-dark body font-bold align-center ml-m"
                  href={repo.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir le repository
                  <Github
                    className="ml-s mt-xs"
                    size="14px"
                    color={colors.dark}
                  />
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="cell-12 mv-xl">
          <div className="pv-xxl ph-xxl mt-pv-l mt-ph-m b-medium-light br-sm overflow-hidden">
            <StaticImage
              src={image}
              alt={title}
              placeholder="dominantColor"
              quality="100"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;

export const Head = () => (
  <Seo
    title="Lacoste Checkout refit"
    description="Refonte du tunnel de commande de Lacoste"
  />
);
