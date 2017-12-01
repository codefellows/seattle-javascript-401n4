import './style/app.scss';

import React from 'react';
import ReactDom from 'react-dom'
import superagent from 'superagent';

import Header from './components/header'
import Footer from './components/footer'
import PokemonList from './components/pokemon-list'
import PokemonDetail from './components/pokemon-detail'

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";

class App extends React.Component {
    
    constructor(props) { 
        super(props);
        this.state = {
            pokemonList: [],
            pokemon: {}
        }
        
        this.selectPokemon = this.selectPokemon.bind(this);
    }
    
    componentDidMount() {
        console.log("__STATE__", this.state);
    }
    
    componentWillMount() {
        
        let pokemonList = localStorage.getItem('pokemonList');
        
        if ( pokemonList ) { 
           pokemonList = JSON.parse(pokemonList);
           this.setState({pokemonList});
        }
        else { 
            superagent.get(pokemonAPI)
                .then(result => {
                    let pokemonList = result.body.results;
                    localStorage.setItem("pokemonList", JSON.stringify(pokemonList))
                    this.setState({pokemonList});
                })
                .catch(console.log);
        }
    }
    
    selectPokemon(pokemonURL) {
        
        superagent.get(pokemonURL)
            .then(result => {
                let pokemon = result.body;
                this.setState({pokemon});
                
            })
            .catch(console.log);
        
    }
    
    render() {
        return (
            <div>
                <Header />
                
                <div id="pokeWrapper">
                
                    <PokemonList 
                        pokemonList={this.state.pokemonList} 
                        handler={this.selectPokemon} 
                    />
                    
                    <PokemonDetail pokemon={this.state.pokemon} />

                
                </div>
                
                <Footer />
            </div>
        )
    }
    
}

ReactDom.render(<App/>, document.getElementById('root'));