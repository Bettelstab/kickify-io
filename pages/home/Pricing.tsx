import Link from "next/link";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <div className={styles.precingSection} id="pricing">
      <h2>Our Pricing</h2>
      <div className={styles.priceBoxes}>
        <div className={styles.priceBox}>
          <h3>Free</h3>
          <p>
            Get started and validate your idea with our free plan. No credit
            card required.
          </p>
          <ul className={styles.features}>
            <li>up to 20 app installs</li>
            <li>up to 500 events / month (orders, customers, you name it)</li>
          </ul>
          <div className={styles.price}>$0</div>
          <Link href="/signup-free">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className={styles.priceBox}>
          <h3>Standard Plan</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="price">$19.99/month</div>
          <a href="#" className="cta">
            Sign Up
          </a>
        </div>
        <div className={styles.priceBox}>
          <h3>Ultimate Plan</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="price">$29.99/month</div>
          <a href="#" className="cta">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
