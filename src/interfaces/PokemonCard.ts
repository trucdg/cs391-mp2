// src/interfaces.PokemonCard.ts
// defines a PokemonCard interface with properties fetched from the API

export interface PokemonCard {
    id: string;
    name: string;
    hp: string;
    types: string[];
    images: {
        small: string;
    }
}