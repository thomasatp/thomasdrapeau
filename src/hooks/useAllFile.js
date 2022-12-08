import { graphql, useStaticQuery } from "gatsby";

export const useAllFile = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `);

  return data.allFile.nodes;
};
