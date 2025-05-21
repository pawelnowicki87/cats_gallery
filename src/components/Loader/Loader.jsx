import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles.loadingContainer}>
      <p className={styles.loadingText}>Loading cats...</p>
      <div className={styles.spinner}></div>
    </div>
  );
}
