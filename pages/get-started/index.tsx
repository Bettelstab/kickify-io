import React from "react";
import Link from "next/link";

import BasicPage from "/components/basic-page";
import styles from "./GetStarted.module.css";
import Template from "./Template";
import Tab from "./Tab";
import code from "./code";

type Tab = "node" | "php" | "rails";

type Props = {
  openTab?: Tab;
};

export default function GetStarted({ openTab = "node" }: Props) {
  // const [openTab, setOpenTab] = React.useState<Tab>("node");

  return (
    <BasicPage title="Get started" description="Examples of how to use our API">
      <h1>Get started with Kickify</h1>
      <div>
        To get started, you can either use one of our{" "}
        <Link href="#templates">templates</Link> or{" "}
        <Link href="#codebase">integrate your existing project</Link>.
      </div>
      <div id="templates" className={styles.templatesSection}>
        <h2>Templates</h2>
        <p>
          We have prepared a few templates for you to get started quickly. You
          can use them as a starting point for your own project.
        </p>
        <div className={styles.templates}>
          <Template id="next" title="Next.js" />
          <Template id="express" title="Express.js / React" />
          <Template id="rails" title="Rails" />
          <Template id="php" title="PHP (Laravel)" />
        </div>
      </div>

      <div className={styles.existingCodebaseSection} id="codebase">
        <h2>Existing codebase</h2>
        <p>
          It&apos;s easy to integrate with your existing codebase at GitHub.
          (More coming soon! Let us know what you need.)
        </p>
        <Link href="/signup/github" className={styles.github}>
          <button>Connect GitHub repository</button>
        </Link>
        <p id="code" className={styles.codeSection}>
          If you want to use our reconcilation service and other features, you
          need to register new shops with our API:
        </p>
      </div>

      <code className={styles.code}>{code[openTab]}</code>
      <div className={styles.tabs}>
        <Tab title="Node.js" id="node" isActive={openTab == "node"} />
        <Tab title="PHP" id="php" isActive={openTab == "php"} />
        <Tab title="Rails" id="rails" isActive={openTab == "rails"} />
      </div>

      <div className={styles.startForFree}>
        <p>
          To obtain your API code,{" "}
          <Link href="/signup/get-started">start for free now!</Link>
        </p>
        <Link href="/signup/get-started">
          <button>Signup</button>
        </Link>
      </div>

      <div className={styles.learnMore}>
        Kickify is the easiest way we know of to develop and deploy a Shopify
        App.{" "}
        <Link href="/#features">Learn more about our amazing features.</Link>
      </div>
    </BasicPage>
  );
}
