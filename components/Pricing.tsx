import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <div className={styles.precingSection} id="pricing">
      <h2>Our Pricing</h2>
      <div className="price-box">
        <h3>Basic Plan</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="price">$9.99/month</div>
        <a href="#" className="cta">
          Sign Up
        </a>
      </div>
      <div className="price-box">
        <h3>Premium Plan</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="price">$19.99/month</div>
        <a href="#" className="cta">
          Sign Up
        </a>
      </div>
      <div className="price-box">
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
  );
}
