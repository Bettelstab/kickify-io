import styles from "./Article.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Article({ title, children }: Props) {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </article>
  );
}

