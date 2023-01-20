import BasicPage from "/components/basic-page";

import styles from "./ThankYou.module.css";

export default function Signup() {
  return (
    <BasicPage description="Signup" title="Signup">
      <div>
        <h1>Signup</h1>
        <div>
          Thank you so much for your interest in Kickify! We are currently in a
          closed alpha testing. If you leave us your email address, we will
          notify you as soon as we start public beta testing!
          <p className={styles.withdrawConsent}>
            If you don't want to receive a message, you can withdraw your
            consent any time by contacting with support@kickify.io.
          </p>
        </div>
        <form action="https://formsubmit.co/contact@kickify.io" method="POST">
          <input type="email" name="email" placeholder="Email" required />
          <input type="submit" value="Send" />
        </form>
      </div>
    </BasicPage>
  );
}
