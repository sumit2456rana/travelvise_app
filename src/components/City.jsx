import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import styles from './City.module.css';
import Spinner from "./Spinner";
import BackButton from "./BackButton";
function City() {
    const {id} = useParams();
    const {getCity, currentCity, isLoading} = useCities();

    if(isLoading) {
        return <Spinner />;
    }
    useEffect(() => {
        getCity(id);
    } , [id])
    const {cityName, emoji, date, notes} = currentCity;
    function formatDate(date) { 
        return new Intl.DateTimeFormat('en' , {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }).format(new Date(date));
    }
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City Name</h6>
        <h3><span>{emoji}</span> {cityName}</h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <h3>{formatDate(date || new Date())}</h3>
      </div>

      {notes && <div className={styles.row}>
        <h6>Your Notes</h6>
        <p>{notes}</p>
      </div>}

      <div className={styles.row}>
        <h6>Learn More</h6>
        <a href={`http://en.wikipedia.org/wiki/${cityName}`} target="_blank" rel="noreferrer">
            Check out {cityName} on Wikipedia
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  )
};

export default City;
