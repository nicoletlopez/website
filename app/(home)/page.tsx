import Identification from "@/components/Identification/Identification";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <section className={styles.home}>
        <header className={styles.header}>
          <h3 className={styles.title}>If found, please return to</h3>
          <h1 className={styles.subtitle}>Nicole Lopez</h1>
        </header>
        <main>
          <Identification />
        </main>
      </section>
    </>
  );
}
