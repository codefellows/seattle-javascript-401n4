import './style/app.scss';

import React from 'react';
import ReactDom from 'react-dom'

import Header from './components/header'
import Footer from './components/footer'
import PokemonList from './components/pokemon-list'
import PokemonDetail from './components/pokemon-detail'
import {fetchData} from './lib/__.js';

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";

class App extends React.Component {
    
    constructor(props) { 
        super(props);
        this.state = {
            loading: "loading",
            pokemonList: [],
            pokemon: {},
        }
        
        this.selectPokemon = this.selectPokemon.bind(this);
        
    }
    
    componentDidMount() {
        console.log("__STATE__", this.state);
    }
    
    
    componentWillMount() {
        
        let loading = "loading";
        this.setState({loading})
        
        fetchData(pokemonAPI)
            .then(data => {
                loading = "";
                let pokemonList = data.results;
                this.setState({pokemonList, loading});
            })

    }
    
    selectPokemon(pokemonURL) {
        
        let loading = "loading";
        this.setState({loading})
        
        fetchData(pokemonURL)
            .then(pokemon => {
                loading = "";
                this.setState({pokemon, loading});
            })
        
    }
    
    
    render() {
        
        return (
            <div>
                <Header />
                
                <div id="pokeWrapper" className={this.state.loading}>
                
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