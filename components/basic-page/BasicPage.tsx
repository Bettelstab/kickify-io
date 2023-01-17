import Head from "next/head";
import styles from "./BasicPage.module.css";
import Advertising from "./Advertising";
import FooterNavigation from "./FooterNavigation";
import NavigationBar from "./NavigationBar";

type Props = {
  title?: string;
  description: string;
  showAdvertising?: boolean;
  children: React.ReactNode;
};

export default function BasicPage({
  title,
  description,
  children,
  showAdvertising = false,
}: Props) {
  let pageTitle = "Shopkick.io";
  if (title) {
    pageTitle = `${pageTitle} - ${title}`;
  }
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        />
      </Head>

      <NavigationBar />

      <div className={styles.container}>
        <main className={styles.main}>
          {children}
          {showAdvertising && <Advertising />}
        </main>
        <footer className={styles.footer}>
          <FooterNavigation />
        </footer>
      </div>
    </>
  );
}
