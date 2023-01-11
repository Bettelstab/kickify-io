import BasicPage from "../components/BasicPage";
import Features from "../components/Features";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <BasicPage description="Best hosting for your Shopify App">
      <Hero />
      <Features />

      <div id="features-section">
        <h2>Prebuilt functionality - some highlights</h2>
        <div className="feature-box">
          <h3>Failsafe event transmission</h3>
          <p>Use our reconcilation service to never miss a new order.</p>
          <h4>Why would I need this?</h4>
          <p>
            Let’s have a look at an example where we can help: <br />
            Let’s say you want to react to each and every new order, you can use
            Shopify’s webhooks to receive events. However, these are error-prone
            and it is advisable to do regular pulling so you won’t miss any
            order. So you need to maintain a local copy of all the orders you
            have seen. Or you use our handy service to do that for you and
            provide you with fail-safe events. <br />
            <br />
            We can do this for any type of data, of course! <br />
            Sounds interesting? See our plans and/or get in contact! You can
            start with a free plan. (A/B)
          </p>
        </div>
        <div className="feature-box">
          <h3>Billing management</h3>
          <p>
            Ready-to-go user plan management which helps you to offer premium
            services to those who pay more.
          </p>
        </div>
      </div>

      <div id="pricing-section">
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

      <div className={styles.grid}>
        <a href="/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Shopkick.io features and API.</p>
        </a>

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
      <div id="contact-section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </BasicPage>
  );
}
