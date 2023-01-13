import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";
import heroImage from "/public/images/angry-dev-3000.jpg";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Deploy your Shopify App in minutes</h1>
          <p className={styles.description}>
            Developing and deploying a Shopify App can be cumbersome. Take a
            shortcut and do it the Shopkick way.
          </p>
          <Link href="/signup">
            <button>Get started</button>
          </Link>
        </div>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.heroImage}
              src={heroImage}
              alt="Angry developer wants to deploy his Shopify App"
              priority
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
