import Head from "next/head";
import Image from "next/image";
import styles from "./BasicPage.module.css";
import Advertising from "./Advertising";
import FooterNavigation from "./FooterNavigation";
import NavigationBar from "./NavigationBar";
import logo from "/public/images/logo.png";

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
  let pageTitle = "Kickify.io";
  if (title) {
    pageTitle = `${pageTitle} - ${title}`;
  }
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <NavigationBar />

      <div className={styles.container}>
        <main className={styles.main}>
          {children}
          {showAdvertising && <Advertising />}
        </main>
        <footer className={styles.footer}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="Kickify.io Logo" width={150}/>
            <div className={styles.brand}>Kickify.io</div>
          </div>
          <FooterNavigation />
        </footer>
      </div>
    </>
  );
}
