import React from "react"
import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from './CountryList.module.css';

function CountryList() {
  const {cities} = useCities();
  const countries = cities.reduce((arr, city) => {
    if(!arr.map((e) => e.country).includes(city.country)){
      return [...arr, {country: city.country, emoji: city.emoji}]
    }else{
      return arr;
    }
  }, [])
  return (
    <ul className={styles.countryList}>
      {countries.map((e) => (
        <CountryItem country={e} key={e.country} />
      ))}
    </ul>
  )
};

export default CountryList;
