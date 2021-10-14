import axios from 'axios'
import React, { Component } from 'react'

import { POKEMON_APP_URL } from '../config'

export default class PokemonDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemon:null
        }

    }
        componentDidMount(){
            const {match}=this.props
            const {id}=match?.params
            axios.get(POKEMON_APP_URL + '/' + id).then((response)=>{
                if(response.status >= 200 && response.status <300 ){
                    this.setState({pokemon:response.data})
                    console.log(response.data)
                }
            })
            

    }
    render() {
        return (
            <div>
               
            </div>
        )
    }
}




