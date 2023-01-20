import styles from "./Article.module.css";

type Props = {
  children: React.ReactNode;
};

export default function ArticleTeaser({ children }: Props) {
  return <article className={styles.article}>{children}</article>;
}
