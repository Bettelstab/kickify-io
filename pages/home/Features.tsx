import Image from "next/image";
import { useInView } from "react-intersection-observer";
import FeatureBox from "./FeatureBox";
import logo from "/public/images/logo.png";
import styles from "./Features.module.css";

export default function Features() {
  const { ref, inView, entry } = useInView({ threshold: 0.4, rootMargin: "100px" });

  return (
    <div className={styles.featuresSection} id="features" ref={ref}>
      <h2>
        <Image className={inView ? "show" : "hidden"} src={logo} alt="The Kickify Logo, a man kicking all Shopify app development problems away" width={100} />
        Kickstart your Shopify App business
      </h2>
      <div className={styles.boxContainer}>
        <FeatureBox title="Easy deployment">
          Use our Node.JS template to get started or bring your own.
        </FeatureBox>
        <FeatureBox title="Great dev experience">
          Enojoy first-class Typescript support and prebuilt functionality.
        </FeatureBox>
        <FeatureBox title="Fair pricing">
          Start for free with peace of mind. We grow with you.
        </FeatureBox>
      </div>
    </div>
  );
}
