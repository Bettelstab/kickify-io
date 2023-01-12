import React from "react";

import styles from "./GetStarted.module.css";
import BasicPage from "../../components/BasicPage";

export default function GetStarted() {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <BasicPage title="Get started" description="Examples of how to use our API">
      <h1>Get started</h1>
      <h2>Use one of our templates...</h2>
      <h2>...or register your existing app with our API</h2>
      <code className={styles.code}>
        {`
    import { registerStore } from '@shopkick/shopkick';

    await registerStore('YOUR-API-KEY', store.accessToken, store.url);
    `}
      </code>

      <a href="/rails">Show Rails version</a>

      <p>To obtain your API code, <a href="/signup">start for free now!</a></p>
      <a href="/signup"><button>Signup</button></a>
    </BasicPage>
  );
}
