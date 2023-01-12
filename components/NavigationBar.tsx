import Link from "next/link";
import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <nav id="navigation-bar" className={styles.navigationBar}>
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
      </ul>
    </nav>
  );
}
