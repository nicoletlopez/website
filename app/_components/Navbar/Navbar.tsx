import { navigation } from '@/data/navigation';
import styles from './Navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {

  const elMenu = navigation.map(navItem => (
    <li key={navItem.href} style={{backgroundColor: navItem?.backgroundColor}}>
      <Link href={navItem.href}>
        <h2>{navItem.label}</h2>
      </Link>
    </li>
  ));

  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          {elMenu}
        </ul>
      </nav>
    </>
  );
}
