import { useState, useEffect } from "react";
import { fetchData } from "../api/apiService";

export const usePokemonData = (initialUrl) => {
    const [loading, setLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");

    useEffect(() => {
        fetchPokemonData(initialUrl);
    }, [initialUrl]);

    const fetchPokemonData = async (url) => {
        setLoading(true);
        try {
            const res = await fetchData(url);
            const _pokemonData = await Promise.all(res.results.map((pokemon) => fetchData(pokemon.url)));
            setPokemonData(_pokemonData);
            setNextUrl(res.next);
            setPrevUrl(res.previous);
        } catch (error) {
            console.error("Failed to fetch pokemon data:", error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, pokemonData, nextUrl, prevUrl, fetchPokemonData };
};
