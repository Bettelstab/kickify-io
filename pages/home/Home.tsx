import BasicPage from "/components/basic-page";
import Features from "./Features";
import Hero from "./Hero";
import PreBuilt from "./PreBuilt";
import Pricing from "./Pricing";
import styles from "./Home.module.css";
import Link from "next/link";
import Contact from "./Contact";

export default function Home() {
  return (
    <BasicPage description="Best hosting for your Shopify App">
      <Hero />
      <Features />
      <PreBuilt />
      <Pricing />

      <Contact />

      <div className={styles.grid}>
        {/*
        <a href="/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Shopkick.io features and API.</p>
        </a>
        */}

        <Link href="/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about the possibilities of Shopify apps</p>
        </Link>

        <Link href="/get-started" className={styles.card}>
          <h2>Get started</h2>
          <p>Examples to get you started quickly</p>
        </Link>

        <Link
          href="/deploy"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy our Shopify App template or your own code to
            Shopkick.io
          </p>
        </Link>
      </div>
    </BasicPage>
  );
}
