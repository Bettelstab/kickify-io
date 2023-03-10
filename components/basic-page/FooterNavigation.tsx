import Link from "next/link";
import styles from "./FooterNavigation.module.css";

export default function NavigationBar() {
  return (
    <nav className={styles.footerNavigation}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#features">Features</Link>
        </li>
        <li>
          <Link href="/#pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
        <li>
          <Link href="/learn">Learn</Link>
        </li>
        <li>
          <Link href="/legal-notice">Legal Notice</Link>
        </li>
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/get-started/footer">Get Started</Link>
        </li>
      </ul>
    </nav>
  );
}
