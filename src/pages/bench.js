import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { LinkNext } from "grommet-icons";
import { Github } from "grommet-icons";
import colors from "../utils/colors";

function Page() {
  const title = "Bench";
  const role = "Dévelopement";
  const tags = ["React", "Next Js", "Styled components", "Notion Api"];
  const link = "https://bench-thomasatp.vercel.app/";
  const repo = {
    exist: true,
    link:
      "https://github.com/thomasatp/bench/tree/0711baccca3605539d67d1037d78abc9fd39e7ca",
  };
  const image = "../images/bench.jpg";
  const description =
    "Projet personnel detiné à référencer plusieurs sources d'inspiration. Utilisation de Notion API pour la base de données. La liste de résultats peut être filtrée par tag. Possibilité de basculer entre thème light et dark. Possibilité de basculer entre un scroll horizontal ou vertical (uniquement en version desktop).";

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
    title="Bench"
    description="Projet personnel detiné à référencer plusieurs sources d'inspiration. Utilisation de Notion API pour la base de données. La liste de résultats peut être filtrée par tag. Possibilité de basculer entre thème light et dark. Possibilité de basculer entre un scroll horizontal ou vertical (uniquement en version desktop)."
  />
);
