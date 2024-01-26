import { useState } from "react";

export default function useGeoLocation({defaultValue}) {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState(defaultValue);
    const [error, setError] = useState("");
    function getPosition() {
        if(!navigator.geolocation) return setError("Browser does not support geoLocation");

        setIsLoading(true);

        navigator.geolocation.getCurrentPosition((pos) => {
            setPosition({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
            });
            
            setIsLoading(false);
        });
    }

    return {isLoading, position, error, getPosition};
}