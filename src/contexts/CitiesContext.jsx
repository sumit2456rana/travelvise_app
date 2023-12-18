import { createContext, useEffect, useReducer } from "react";

const CitiesContext = createContext();

const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: ""
}

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return { ...state, isLoading: true };
        case "cities/loaded":
            return { ...state, isLoading: false, cities: action.payload };
        case "city/loaded":
            return { ...state, isLoading: false, currentCity: action.payload };
        case "city/deleted":
            return {
                ...state,
                isLoading: false,
                cities: state.cities.filter((eCity) => eCity.id !== action.payload)
            }
        case "city/created":
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities, action.payload],
            }
        case "rejected":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            throw new Error("Unknown action type!");
    }
}
const BASE_URL = "http://localhost:9001";
export function CitiesProvider({ children }) {
    const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(reducer, initialState);

    async function fetchCities() {
        dispatch({ type: "loading" });
        try {
            const resp = await fetch(`${BASE_URL}/cities`);
            const data = await resp.json();
            dispatch({ type: 'cities/loaded', payload: data });
            console.log(data);
        } catch (error) {
            console.log(error);
            dispatch({type: 'rejected', payload: "There was an error while loading the cities..!!"})
        }
    }

    useEffect(() => {
        fetchCities();
    }, [])
    return <CitiesContext.Provider value={{ cities, isLoading, currentCity, error }}>{children}</CitiesContext.Provider>
} 