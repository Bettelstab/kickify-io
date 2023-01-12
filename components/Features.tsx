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
      <h2>🚀 Kickstart your Shopify App business</h2>
      <div className={styles.boxContainer}>
        <FeatureBox>
          <h3>Easy deployment</h3>
          <p>Use our Node.JS template to get started or bring your own.</p>
        </FeatureBox>
        <FeatureBox>
          <h3>Interoperability</h3>
          <p>
            Use our environment as a bridge between Shopify and your systems.
          </p>
        </FeatureBox>
        <FeatureBox>
          <h3>Great dev experience</h3>
          <p>First-class Typescript support and prebuilt functionality</p>
        </FeatureBox>
      </div>
    </div>
  );
}
