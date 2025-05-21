import styles from './CatModal.module.scss';

export default function CatModal({ cat, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={cat.url} alt="cat big" />
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
