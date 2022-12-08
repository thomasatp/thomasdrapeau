import * as React from "react";
import Layout from "../components/layout";
import Path from "../components/path";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className="title">Oooops</h1>
      <p className="body">
        Sorry 😔, we couldn’t find what you were looking for.
      </p>
      <Path to="/">Go Back</Path>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Not found" />;
