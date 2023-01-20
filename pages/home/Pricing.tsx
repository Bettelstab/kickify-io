import Link from "next/link";
import classNames from "/library/classnames";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <div className={styles.pricingSection} id="pricing">
      <h2>Our Pricing</h2>
      <div className={styles.priceBoxes}>
        <div className={classNames(styles.priceBox, styles.free)}>
          <h3>Free</h3>
          <p>
            Get started and validate your idea with our free plan. No credit
            card required.
          </p>
          <ul className={styles.features}>
            <li>up to 20 app installs</li>
            <li>up to 1000 events / month</li>
            <li>Community Support</li>
          </ul>
          <div className={styles.price}>$0</div>
          <Link href="/signup/free">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className={styles.priceBox}>
          <h3>Beginner</h3>
          <ul className={styles.features}>
            <li>up to 300 app installs</li>
            <li>up to 5000 events / month</li>
            <li>each 2500 events more for 6 Euro</li>
            <li>professional support</li>
          </ul>
          <div className={styles.price}>$15/month</div>
          <Link href="/signup/beginner">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className={styles.priceBox}>
          <h3>Intermediate</h3>
          <ul className={styles.features}>
            <li>up to 50000 events / month</li>
            <li>each 10000 events more for 19 Euro</li>
            <li>professional support</li>
          </ul>
          <div className={styles.price}>$99/month</div>
          <Link href="/signup/intermediate">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className={styles.priceBox}>
          <h3>Advanced</h3>
          <ul className={styles.features}>
            <li>up to 250000 events / month</li>
            <li>each 100000 more for 50 Euro</li>
            <li>priority support</li>
          </ul>
          <div className={styles.price}>$299/month</div>
          <Link href="/signup/advanced">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
