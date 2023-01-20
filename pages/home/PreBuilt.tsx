import Link from "next/link";
import styles from "./PreBuilt.module.css";

export default function PreBuilt() {
  return (
    <div className={styles.preBuilt}>
      <h2>Focus on your core product - we cover for you:</h2>

      <div className={styles.featureBox}>
        <h3>🏆 Tier management</h3>
        <p>
          Ready-to-go user tier management which helps you to offer premium
          services to those who pay more.
        </p>
      </div>
      <div className={styles.featureBox}>
        <h3>🚧 Staging environment</h3>
        <p>
          Test you app in your staging shop before you roll it out to your
          clients.
        </p>
      </div>
      <div className={styles.featureBox}>
        <h3>⚙️ Interoperability</h3>
        <p>
          Use our environment as a bridge between Shopify and the rest of your
          systems.
        </p>
      </div>
      <div className={styles.featureBox}>
        <h3>⏰ Timed background jobs</h3>
        <p>Use our background job service to run code in regular intervals.</p>
      </div>
      <div className={styles.featureBox}>
        <h3>🚨 Failsafe event transmission</h3>
        <p>
          Use our reconcilation service to never miss a new order / product /
          etc.
        </p>
        <details>
          <summary>Why would I need this?</summary>
          Let’s say you want to react to each and every new order. You can use
          Shopify’s webhooks to receive events. However, these are error-prone
          and it is advisable to do regular pulling so you won’t miss any order.
          So you need to maintain a local copy of all the orders you have seen.
          Or you use our handy service to do that for you and provide you with
          fail-safe events. <br />
          <br />
          We can do this for any type of data available with Shopify webhooks,
          of course! <br />
          Sounds interesting?
          <div className={styles.button}>
            <Link href="/signup">
              <button>Get started with a free trial!</button>
            </Link>
          </div>
        </details>
      </div>
    </div>
  );
}
