import React from "react"
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import styles from './CityItem.module.css';
function CityItem({city}) {
    const {cityName, emoji, date, id, position} = city;

    // if(!position || !position.lat || !position.lng) return;
    const {deleteCity, currentCity} = useCities();
    function handleClick(e) {
        e.preventDefault();
        deleteCity(id);
    }
    function formatDate(date) { 
        return new Intl.DateTimeFormat('en' , {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }).format(new Date(date));
    }
  return (
    <li>
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className={`${styles.cityItem} ${id === currentCity.id && styles["cityItem--active"]}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
      </Link>
    </li>
  )
};  

export default CityItem;
