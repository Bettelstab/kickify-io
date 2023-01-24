import styles from "./FeatureBox.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function FeatureBox({ title, children }: Props) {
  return (
    <div className={styles.featureBox}>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
