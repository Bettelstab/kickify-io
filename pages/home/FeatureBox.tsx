import styles from "./FeatureBox.module.css";

type Props = {
  children: React.ReactNode;
};

export default function FeatureBox(props: Props) {
  return <div className={styles.featureBox}>{props.children}</div>;
}
