import { useState, useEffect } from 'react';
import { fetchCats } from '../../services/CatService';
import CatModal from '../CatModal/CatModal';
import Loader from '../Loader/Loader';
import CatCard from '../CatCard/CatCard';
import styles from './CatGallery.module.scss';

export default function CatGallery() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const loadCats = async () => {
    setLoading(true);
    try {
      const data = await fetchCats();
      const sliced = data.slice(0, 6);

      const preloadImages = sliced.map(cat => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = cat.url;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(preloadImages);
      setCats(sliced);
    } catch (error) {
      console.error('Error loading cats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCats();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mini Cat Gallery</h1>
      <button className={styles.button} onClick={loadCats}>Refresh cats</button>

      {loading ? (
        <Loader />
      ) : (
        <div className={styles.grid}>
          {cats.map((cat) => (
            <CatCard key={cat.id} cat={cat} onClick={setSelectedCat} />
          ))}
        </div>
      )}

      {selectedCat && (
        <CatModal cat={selectedCat} onClose={() => setSelectedCat(null)} />
      )}
    </div>
  );
}
