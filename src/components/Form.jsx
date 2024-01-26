import { useEffect, useState } from "react"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker"
import Button from "./Button";
import BackButton from "./BackButton";
import styles from "./Form.module.css";
import { useCities } from "../contexts/CitiesContext";
import useUrlPosition from "../hooks/useUrlPosition";
import Message from "./Message"
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
export default function Form() {
    const {isLoading, createCity} = useCities();
    const [lat, lng] = useUrlPosition();
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState("");
    const [emoji, setEmoji] = useState("");
    const [err, setErr] = useState("");
    const [isLoadingGeoLocation, setIsLoadingGeoLocation] = useState(false);
    const navigate = useNavigate();
    function convertToEmoji (countryCode) {
        const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    }
    useEffect(() => {
        async function fetchCityData() {
            try {
                setIsLoadingGeoLocation(true);
                setErr("");
                const resp = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
                const data = await resp.json();
                if(!data.countryCode)
                    throw new Error (
                        "👋 That doesn't seem to be a city. Click somewhere else 🙂"    
                    )
                
                setCityName(data.city || data.locality);
                setCountry(data.countryName);
                setEmoji(convertToEmoji(data.countryCode));
            } catch (error) {
                setErr(error.message);
            } finally {
                setIsLoadingGeoLocation(false);
            }
        }

        fetchCityData();
    }, [lat, lng])
    function handleSubmit(e) {
        e.preventDefault();
        if(!cityName && !date) return;

        const cityObj = {
            cityName,
            country, 
            date,
            emoji,
            notes,
            position: {lat, lng},
        };

        createCity(cityObj);
        navigate('/app/cities');
    }
    if(isLoadingGeoLocation) {
        return <Spinner />;
    }
    if(err) {
        return <Message message={err} />;
    }
    return(
        <form className={`${styles.form} ${isLoading && styles.loading}`} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <label>City Name</label>
                <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)}/>
                <span className={styles.flag}>{emoji}</span>
            </div>

            <div className={styles.row}>
                <label>When did you go to {cityName}?</label>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>

            <div className={styles.row}>
                <label>Notes about your trip to {cityName}</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
            </div>

            <div className={styles.buttons}>
                <Button type={"primary"}>Add</Button>
                <BackButton />
            </div>
        </form>
    )
}