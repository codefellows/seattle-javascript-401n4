import React from 'react';

class PokemonDetail extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    
    render() {
        
        return (
            <div id="pokemonContainer">
                <h2>{this.props.pokemon.name}</h2>
            </div> 
        )
    }
    
}

export default PokemonDetail;
