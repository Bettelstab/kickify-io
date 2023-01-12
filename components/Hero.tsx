import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Deploy your Shopify App in minutes</h1>
          <p className={styles.description}>
            Developing and deploying a Shopify App can be cumbersome. Take a
            shortcut and do it the Shopkick way.
          </p>
          <Link href="/signup">
            <button>Get started</button>
          </Link>
        </div>
        <div>
          <img
            className={styles.heroImage}
            src="/images/angry-dev-400.jpg"
            alt="Angry developer wants to deploy his Shopify App"
            srcSet="/images/angry-dev-400.jpg 400w, /images/angry-dev-1000.jpg 1000w, /images/angry-dev-3000.jpg 3000w"
          />
        </div>
      </div>
    </div>
  );
}
