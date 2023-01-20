import BasicPage from "/components/basic-page";

import styles from "./ThankYou.module.css";

export default function Signup() {
  return (
    <BasicPage description="Signup" title="Signup">
      <div>
        <h1>Signup</h1>
        <div>
          Thank you so much for your interest in Kickify! We are currently in a
          closed alpha testing. We will notify you as soon as we start public beta testing!
          <p className={styles.withdrawConsent}>
            If you don&apos;t want to receive a message, let us know by writing
            at support@kickify.io.
          </p>
        </div>
      </div>
    </BasicPage>
  );
}
