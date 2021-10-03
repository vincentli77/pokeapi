import "./App.scss";
import Pokemon from "./components/Pokemon";
import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SinglePokemon from "./components/SinglePokemon";
import Navigation from "./components/Navigation";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemon2, setPokemon2] = useState([]);
  const [pokemon3, setPokemon3] = useState([]);
  const [pokemon4, setPokemon4] = useState([]);
  const [pokemon5, setPokemon5] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
    );
    const data = await response.json();
    let data_pokemon = [];

    data.results.forEach((element) => {
      data_pokemon.push(element);
    });
    setPokemon(data_pokemon);
  };
  const getData2 = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
    );
    const data2 = await response.json();
    let data_pokemon2 = [];

    data2.results.forEach((element) => {
      data_pokemon2.push(element);
    });
    setPokemon2(data_pokemon2);
  };

  const getData3 = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
    );
    const data3 = await response.json();
    let data_pokemon3 = [];

    data3.results.forEach((element) => {
      data_pokemon3.push(element);
    });
    setPokemon3(data_pokemon3);
  };

  const getData4 = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"
    );
    const data4 = await response.json();
    let data_pokemon4 = [];

    data4.results.forEach((element) => {
      data_pokemon4.push(element);
    });
    setPokemon4(data_pokemon4);
  };

  const getData5 = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=154&offset=493"
    );
    const data5 = await response.json();
    let data_pokemon5 = [];

    data5.results.forEach((element) => {
      data_pokemon5.push(element);
    });
    setPokemon5(data_pokemon5);
  };
  useEffect(() => {
    getData();
    getData2();
    getData3();
    getData4();
    getData5();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="contain">
            <Navigation />

            <div className="card-list">
              {pokemon.map((data, index) => (
                <Pokemon key={index} pkmn={data.name} url={data.url} />
              ))}
            </div>
          </div>
        </Route>

        <Route exact path="/2">
          <div className="contain">
            <Navigation />

            <div className="card-list">
              {pokemon2.map((data2, index) => (
                <Pokemon key={index} pkmn={data2.name} url={data2.url} />
              ))}
            </div>
          </div>
        </Route>

        <Route exact path="/3">
          <div className="contain">
            <Navigation />

            <div className="card-list">
              {pokemon3.map((data3, index) => (
                <Pokemon key={index} pkmn={data3.name} url={data3.url} />
              ))}
            </div>
          </div>
        </Route>

        <Route exact path="/4">
          <div className="contain">
            <Navigation />

            <div className="card-list">
              {pokemon4.map((data4, index) => (
                <Pokemon key={index} pkmn={data4.name} url={data4.url} />
              ))}
            </div>
          </div>
        </Route>

        <Route exact path="/5">
          <div className="contain">
            <Navigation />

            <div className="card-list">
              {pokemon5.map((data5, index) => (
                <Pokemon key={index} pkmn={data5.name} url={data5.url} />
              ))}
            </div>
          </div>
        </Route>
        {pokemon.map((data, index) => (
          <Route key={index} path="/:data">
            <Navigation />
            <div className="contain">
              <SinglePokemon key={index} />
            </div>
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
