import * as React from "react";

import Seo from "../components/seo";

const IndexPage = () => (
  <div>
    <center>
      <h4>Java Man</h4>
      <h1> Coming Soon</h1>
    </center>
  </div>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
