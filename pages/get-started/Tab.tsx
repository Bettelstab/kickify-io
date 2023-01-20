import Link from 'next/link';
import classNames from 'library/classnames';
import styles from './Tab.module.css';

type Props = {
  title: string;
  id: string;
  isActive?: boolean;
}

export default function Tab({ title, id, isActive }: Props) {
  return (
    <Link className={classNames(styles.tab, isActive && styles.activeTab)} href={`/get-started/${id}/#code`}>
      {title}
    </Link>
  );
}
