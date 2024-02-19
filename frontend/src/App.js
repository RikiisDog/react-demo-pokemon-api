import "./App.css";
import { usePokemonData } from "./hooks/usePokemonData";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/NavBar/Navbar";
import { PaginationControls } from "./components/PageNationButton/PagenationButton";

function App() {
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
    const { loading, pokemonData, nextUrl, prevUrl, fetchPokemonData } = usePokemonData(ENDPOINT);

    const handlePrevPage = () => {
        if (!prevUrl) return;
        fetchPokemonData(prevUrl);
    };

    const handleNextPage = () => {
        if (!nextUrl) return;
        fetchPokemonData(nextUrl);
    };

    return (
        <>
            <Navbar />
            <div className="App">
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <div className="pokemonCardContainer">
                            {pokemonData.map((pokemon, index) => (
                                <Card key={index} pokemon={pokemon} />
                            ))}
                        </div>
                        <PaginationControls
                            onPrev={handlePrevPage}
                            onNext={handleNextPage}
                            hasPrev={!!prevUrl}
                            hasNext={!!nextUrl}
                        />
                    </>
                )}
            </div>
        </>
    );
}

export default App;
