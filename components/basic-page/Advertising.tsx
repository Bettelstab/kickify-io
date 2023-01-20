import Link from "next/link";
import styles from "./Advertising.module.css";

export default function Advertising() {
  return (
    <div className={styles.advertising}>
      <span className={styles.icon}>🚀</span>
      Are you looking for an easy way to deploy your Shopify App as fast as possible? Or do you need some
      help to get started? Have a look at what Kickify.io has to offer.
      <Link href="/">
        <button>Read more</button>
      </Link>
    </div>
  );
}
