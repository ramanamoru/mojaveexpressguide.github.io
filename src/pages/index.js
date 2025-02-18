import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <b>A Viva New Vegas Additions Guide</b>
        <br />
        <br />
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/introduction">
            To Guide
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Viva New Vegas Additions"
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}