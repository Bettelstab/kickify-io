import React from "react";
import Link from "next/link";

import BasicPage from "/components/basic-page";
import styles from "./GetStarted.module.css";
import Template from "./Template";
import Tab from "./Tab";

export default function GetStarted() {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <BasicPage title="Get started" description="Examples of how to use our API">
      <h1>Get started with Kickify</h1>
      <h2>Templates</h2>
      <p>
        We have prepared a few templates for you to get started quickly. You can
        use them as a starting point for your own project.
      </p>
      <div className={styles.templates}>
        <Template id="next" title="Next.js" />
        <Template id="express" title="Express.js / React" />
        <Template id="rails" title="Rails" />
        <Template id="php" title="PHP (Laravel)" />
      </div>

      <h2>Existing codebase</h2>
      <p>
        It&apos;s easy to integrate with your existing codebase at GitHub. (More
        coming soon! Let us know what you need.)
      </p>
      <Link href="/signup-github" className={styles.github}>
        <button>Connect GitHub repository</button>
      </Link>
      <p>
        If you want to use our reconcilation service and other features, you
        need to register new shops with our API:
      </p>
      <code className={styles.code}>
        {`import { registerStore } from '@kickify/kickify';

await registerStore('YOUR-API-KEY', store.accessToken, store.url);
    `}
      </code>
      <div className={styles.tabs}>
        <Tab title="Node.js" id="node" isActive />
        <Tab title="PHP" id="php" />
        <Tab title="Rails" id="rails" />
      </div>

      <div className={styles.startForFree}>
        <p>
          To obtain your API code,{" "}
          <Link href="/signup-get-started">start for free now!</Link>
        </p>
        <Link href="/signup-get-started">
          <button>Signup</button>
        </Link>
      </div>
    </BasicPage>
  );
}
