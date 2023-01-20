import Link from "next/link";

import BasicPage from "/components/basic-page";
import styles from "./Signup.module.css";

export default function Signup() {
  return (
    <BasicPage description="Signup" title="Signup">
      <div className={styles.signup}>
        <h1>Signup</h1>
        <p>By signing up, you accept our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
        <form action="https://formsubmit.co/contact@kickify.io" method="POST">
          <input type="email" name="email" placeholder="Email" required />
          <input type="hidden" name="_next" value="https://www.kickify.io/signup/thank-you" />
          <button type="submit">Continue</button>
        </form>
      </div>
    </BasicPage>
  );
}
