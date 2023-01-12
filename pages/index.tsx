import BasicPage from "../components/BasicPage";
import Features from "../components/Features";
import Hero from "../components/Hero";
import PreBuilt from "../components/PreBuilt";
import Pricing from "../components/Pricing";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <BasicPage description="Best hosting for your Shopify App">
      <Hero />
      <Features />
      <PreBuilt />
      <Pricing />

      <div className={styles.grid}>
        {/*
        <a href="/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Shopkick.io features and API.</p>
        </a>
        */}

        <a href="/app" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about the possibilities of Shopify apps</p>
        </a>

        <a href="/get-started" className={styles.card}>
          <h2>Get started</h2>
          <p>Examples to get you started quickly</p>
        </a>

        <a
          href="/deploy"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy our Shopify App template or your own code to
            Shopkick.io
          </p>
        </a>
      </div>
    </BasicPage>
  );
}
