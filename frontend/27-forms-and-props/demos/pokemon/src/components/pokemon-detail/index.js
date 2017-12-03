import React from 'react';

class PokemonDetail extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.getType = this.getType.bind(this);
        
    }
    
    getType() {
        if ( this.props.pokemon.name ) { 
            return this.props.pokemon.types.reduce( (primaryType, type) =>  {
               primaryType = type.slot == 1 ? type.type.name : '';
               return primaryType;
            }, '');
        }
    }
    
    
    render() {
        
        return (
            
            this.props.pokemon.name ?
            
                    <div id="pokemonContainer" className={this.getType()}>
            
                        <h2>{this.props.pokemon.name}</h2>
                        
                        <div id="detailWrapper">
                        
                            <div>
                                <img src={this.props.pokemon.sprites.front_shiny} />
                            </div>
                            
                            <div>
                                <h3>Abilities</h3>
                                <ul>
                                {this.props.pokemon.abilities.map( (ability,i) => 
                                    <li key={i}>{ability.ability.name}</li>
                                )}
                                </ul>
                            </div>                                
                            
                            <div>
                                <h3>Moves</h3>
                                <ul>
                                {this.props.pokemon.moves.map( (move,i) => 
                                    <li key={i}>{move.move.name}</li>
                                )}
                                </ul>
                            </div>
                            

                        </div>
                    </div>
                    
                :  <div id="pokemonContainer"></div>
        )
    }
    
}

export default PokemonDetail;
