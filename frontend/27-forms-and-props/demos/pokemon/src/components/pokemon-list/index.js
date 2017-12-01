import React from 'react';

class PokemonList extends React.Component {
    
    constructor(props) {
        super(props);
        this.selectPokemon = this.selectPokemon.bind(this);
    }
    
    selectPokemon(e) {
        let url = e.target.value;
        this.props.handler(url);
    }
    
    render() {
        
        return (
            <div id="pokemonList">
                <form>
                        <h4>Choose</h4>
                        {
                            this.props.pokemonList.map( (pokemon, i) => 
                                <div key={i}>
                                    <input 
                                        onChange={this.selectPokemon}
                                        type="radio" 
                                        id={pokemon.name}
                                        name="pokemon"
                                        value={pokemon.url} 
                                    />
                                    <label htmlFor={pokemon.name}>
                                        {pokemon.name}
                                    </label>
                                </div>
                            )
                        }
                </form>
            </div>            
        )
        
    }
}


export default PokemonList;