import styles from './CatCard.module.scss';

export default function CatCard({ cat, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(cat)}>
      <img src={cat.url} alt="cat" className={styles.image} />
    </div>
  );
}
