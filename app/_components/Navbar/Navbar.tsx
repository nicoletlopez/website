import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li><h3>Home</h3></li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Interests</li>
          <li>FAQs</li>
        </ul>
      </nav>
    </>
  );
}