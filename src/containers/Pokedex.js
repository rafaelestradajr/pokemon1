import React,{useEffect,useState} from 'react';
import { Box, CircularProgress,Grid } from '@material-ui/core';
import axios from 'axios';
import { IMAGE_API_URL, POKEMON_APP_URL } from '../config';
import PokemonCard from '../components/PokemonCard';



export default function Pokedex() {

    const[pokemonData,setPokemonData] = useState(null)

    useEffect(() => {
        axios.get(POKEMON_APP_URL + '?limit=800')
        .then((response) =>{
            if(response.status >= 200 && response.status <300 ) {
                const {results} = response.data
                let newPokemonData =[]
                results.forEach((pokemon,index) => {
                    index++

                    let pokemonObject ={
                        id: index,
                        url:IMAGE_API_URL + index + '.png',
                        name: pokemon.name
                    }
                    newPokemonData.push(pokemonObject)
                });

                setPokemonData(newPokemonData)

            }


           
        })



    },[])
    return (
        
            <Box>
                {pokemonData ? (

                <Grid container spacing= {2}>
                   {pokemonData.map((pokemon) =>{
                      return (
                          <PokemonCard  pokemon={pokemon} image={pokemon.url} />
                      )
                
                   })}


                </Grid>
                
                 ) : (
                 
                 <CircularProgress style={{marginTop: 100}}/>
                 )}

            </Box>
        
    )
}
