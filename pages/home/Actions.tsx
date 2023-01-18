import Link from "next/link";
import styles from "./Actions.module.css";

export default function Actions() {
  return (
    <div className={styles.grid}>
      {/*
  <a href="/docs" className={styles.card}>
    <h2>Documentation &rarr;</h2>
    <p>Find in-depth information about Kickify.io features and API.</p>
  </a>
  */}

      <Link href="/learn" className={styles.card}>
        <h2>Learn &rarr;</h2>
        <p>Learn about the possibilities of Shopify apps</p>
      </Link>

      <Link href="/get-started" className={styles.card}>
        <h2>Get started &rarr;</h2>
        <p>Examples to get you started quickly</p>
      </Link>

      <Link href="/deploy" className={styles.card}>
        <h2>Deploy &rarr;</h2>
        <p>
          Instantly deploy our Shopify App template or your own code to
          Kickify.io
        </p>
      </Link>
    </div>
  );
}
