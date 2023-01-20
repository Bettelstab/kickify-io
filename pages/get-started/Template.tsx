import Link from "next/link";
import styles from "./Template.module.css";

type Props = {
  id: string;
  title: string;
};

export default function Template({ id, title }: Props) {
  return (
    <div className={styles.template}>
      <div className={styles.icon}></div>
      <h3 className={styles.title}>📁 {title}</h3>
      <Link href={`/deploy/${id}`}>
        <button>Deploy</button>
      </Link>
    </div>
  );
}
