// src/components/PokemonCards.tsx
// Fetch and Display Pokemon Cards 

import styled from "styled-components";
import { PokemonCard } from "../interfaces/PokemonCard";

// Styled components for the card display
const AllCardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #E4A0B7;
`;

const SingleCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    padding: 2%;
    margin: 1%;
    border: 2px solid #A7C7E7;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
    font: italic small-caps bold calc(2px + 1vw) "Rowdies";
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

    img {
        max-width: 100%;
        height: auto;
    }

    @media screen and (max-width: 750px) {
        width: 45%; /* Cards take up more width on smaller screens */
        font-size: calc(1.5px + 1vw);
    }

    /* Media Query for very small screens */
    @media screen and (max-width: 480px) {
        width: 90%; /* Cards take up almost the entire width on mobile */
        font-size: calc(1px + 1vw);
    }
`;

// Main component to display cards
export default function PokemonCards( props : {data: PokemonCard[]} ) {

    console.log(props)

    if (props.data.length == 0) {
        return <p>Loading cards ... Please give it 30 seconds!!!</p>
    }

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