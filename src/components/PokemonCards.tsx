// src/components/PokemonCards.tsx
// Fetch and Display Pokemon Cards 

import styled from "styled-components";
import { PokemonCard } from "../interfaces/PokemonCard";

// Styled components for the card display
const AllCardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    background-color: #E4A0B7;
`;

const SingleCardDiv = styled.div`
    max-width: 25%;
    margin: 15px;
    padding: 20px;
    border: 2px solid #cc;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
    font-family: "Rowdies", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-align: center;
    text-transform: uppercase;

    h2 {
        font-size: 1.25rem;
        color: #333;
    }

    p {
        font-size: 1rem;
        color: #666;
    }
`;

// Main component to display cards
export default function PokemonCards( props : {data: PokemonCard[]} ) {

    console.log(props)

    // only take the first 20 items instead of the array of the entire 250 pokemoncards
    let card_list = props.data.slice(0,20) ;

    console.log (card_list)

    return (
        <AllCardsDiv>
            { card_list.map((card: PokemonCard)=> (
                <SingleCardDiv key={card.id}>
                    <h2>{card.name}</h2>
                    <p>Type: {card.types.join(", ")}</p>
                    <img src={card.images.small} alt={`Img of card ${card.name}`} />
                </SingleCardDiv>
            )
            ) }

        </AllCardsDiv>
    )
}