import Image from "next/image";
import logo from "/public/images/logo.png";
import styles from "./Features.module.css";

type Props = {
  children: React.ReactNode;
};

function FeatureBox(props: Props) {
  return <div className={styles.featureBox}>{props.children}</div>;
}

export default function Features() {
  return (
    <div className={styles.featuresSection} id="features">
      <h2>
        <Image src={logo} alt="The Kickify Logo, a man kicking all Shopify app development problems away" width={100} />
        Kickstart your Shopify App business
      </h2>
      <div className={styles.boxContainer}>
        <FeatureBox>
          <h3>Easy deployment</h3>
          <p>Use our Node.JS template to get started or bring your own.</p>
        </FeatureBox>
        <FeatureBox>
          <h3>Great dev experience</h3>
          <p>Enojoy first-class Typescript support and prebuilt functionality.</p>
        </FeatureBox>
        <FeatureBox>
          <h3>Fair pricing</h3>
          <p>Start for free with peace of mind. We grow with you.</p>
        </FeatureBox>
      </div>
    </div>
  );
}
