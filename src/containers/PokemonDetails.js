import axios from "axios";
import React, { Component } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";

import { POKEMON_APP_URL } from "../config";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = (theme) => ({
  pokedexContainer: {
    height: "80vh",
    backgroundColor: "black",
    color: "white",
    marginTop: 75,
    textAlign: "center",
    borderRadius: 5,
    paddingTop: 70,
  },
  textTitle: {
    textTransform: "upperCase",
    fontFamily: "Fantasy",
  },
  pokemonImage: {
    width: "170px",
    height: "170px",
  },
  pokemonInfoContainer: {
    bottom: 60,
    position: "absolute",

    width: "100%",
  },
  seperator: {
    height: "0.01mm",
    width: "95%",
  },
  favorite: {
    height: 50,
    width: 50,
    marginTop: 15,
  },
  text: {
    fontSize: 30,
  },
});

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    const { id } = match?.params;
    axios.get(POKEMON_APP_URL + "/" + id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        this.setState({ pokemon: response.data });
        console.log(response.data);
      }
    });
  }
  render() {
    const { classes } = this.props;
    const { pokemon } = this.state;
    if (pokemon) {
      const { name, sprites,height,weight,types } = pokemon;
      return (
        <Box>
          <Box className={classes.pokedexContainer}>
            <Typography className={classes.textTitle} variant="h1">
              {name}
            </Typography>
            <img
              className={classes.pokemonImage}
              alt=""
              src={sprites.front_default}
            />
            <Box className={classes.pokemonInfoContainer}>
              <hr className={classes.separator} />
              <Grid container>
                <Grid item md={1}>
                  <Button className={classes.favorite}>
                    <FavoriteIcon style={{ color: "white", fontSize: 45 }} />
                  </Button>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Name
                    <br />
                    {name}
                  </Typography>
                </Grid>


                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Height
                    <br />
                    {height}m
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Weight
                    <br />
                    {weight}lbs
                  </Typography>
                </Grid>
                    {types.map((pokemonType) =>{
                const  {name}= pokemonType.type
                return(
                    <Grid item md={2}>
                        <Typography className={classes.text}>
                            
                            Type
                            <br/>
                            {name}

                        </Typography>
                    
                    </Grid>
                )
                

                    })}

                
              </Grid>
            </Box>
          </Box>
        </Box>
      );
    } else {
      return <CircularProgress />;
    }
  }
}

export default withStyles(styles)(PokemonDetails);
