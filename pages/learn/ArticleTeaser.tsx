import Link from "next/link";
import styles from "./ArticleTeaser.module.css";

type Props = {
  title: string;
  slug: string;
  children: React.ReactNode;
};

export default function Article({ title, slug, children }: Props) {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>📖 {title}</h2>
      {children}
      <Link href={`/learn/${slug}`}><button className={styles.readMore}>Read more</button></Link>
    </article>
  );
}

