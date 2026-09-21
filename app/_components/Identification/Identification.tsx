import styles from './Identification.module.scss';
import CustomImage from '../CustomImage/CustomImage';
import Image from 'next/image';

export default function Identification() {

  const userData: Record<string, string | number> = {
    name: "Nicole Lopez",
    occupation: "Software Developer",
    yoe: 6,
    address: "Acacia Ridge, Greater Brisbane, QLD",
  }

  const titles: Record<string, string> = {
    yoe: "years of experience",
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.imageArea}>
            <CustomImage src={`/api/blob?pathname=${encodeURIComponent('img/me.jpg')}`} alt="ID Picture" width={150} height={150} unoptimized />
          </div>
          <dl className={styles.info}>
            {
              Object.entries(userData).map(([key, val]) => (<div className={styles.infoEntry} key={key}><dt>{titles?.[key] ?? key}</dt><dd>{val}</dd></div>))
            }
          </dl>
          <img src={'/barcode.svg'} width={'100%'} height={50} alt='barcode' />
        </div>
      </section>
    </>
  );
}
