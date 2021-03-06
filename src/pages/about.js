import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import About from "../components/AboutPage";

const AboutPage = () => (
  <Layout>
    <Seo title="About"/>
    <About />
  </Layout>
)

export default AboutPage;
