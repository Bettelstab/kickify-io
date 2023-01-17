import BasicPage from "/components/basic-page";
import styles from "./Home.module.css";
import Features from "./Features";
import Hero from "./Hero";
import PreBuilt from "./PreBuilt";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Actions from "./Actions";

export default function Home() {
  return (
    <BasicPage description="Best hosting for your Shopify App">
      <Hero />
      <Features />
      <PreBuilt />
      <Pricing />

      <div className={styles.grid}>
        <Contact />
        <Actions />
      </div>

    </BasicPage>
  );
}
