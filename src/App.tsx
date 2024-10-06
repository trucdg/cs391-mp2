import { useEffect, useState } from "react";
import PokemonCards from "./components/PokemonCards";
import { PokemonCard } from "./interfaces/PokemonCard";
import styled from "styled-components";


const AppWrapper = styled.div`
  width: 90vw;
  margin:auto;
  padding: 20px;
`;

export default function App () {

  //useState Hook to store data
  const [data, setCards] = useState<PokemonCard[]>([]); // initial state is an empty list

  //useEffect Hook for error handling and re-rendering
  useEffect(()=> {
    async function fetchPokemonCards(): Promise<void> {
      const rawData = await fetch("https://api.pokemontcg.io/v2/cards?select=id,name,images,types");
      const {data} : {data: PokemonCard[]} = await rawData.json();
      setCards(data);
    }

    fetchPokemonCards()
      .then(()=> console.log("Data fetched successfully!!"))
      .catch((e: Error) => console.log("Error: " + e));
  }, [data.length]);

  return (
    <AppWrapper>
      {/* Pass the cards as props to the PokemonCards compoenent */}
      <PokemonCards data = {data} />
    </AppWrapper>
  )
}