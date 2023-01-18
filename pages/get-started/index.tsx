import React from "react";

import BasicPage from "/components/basic-page";
import styles from "./GetStarted.module.css";
import Link from "next/link";

export default function GetStarted() {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <BasicPage title="Get started" description="Examples of how to use our API">
      <h1>Get started</h1>
      <h2>Use one of our templates...</h2>
      <h2>...or register your existing app with our API</h2>
      <code className={styles.code}>
        {`
    import { registerStore } from '@kickify/kickify';

    await registerStore('YOUR-API-KEY', store.accessToken, store.url);
    `}
      </code>

      <Link href="/rails">Show Rails version</Link>

      <p>To obtain your API code, <Link href="/signup">start for free now!</Link></p>
      <Link href="/signup"><button>Signup</button></Link>
    </BasicPage>
  );
}
