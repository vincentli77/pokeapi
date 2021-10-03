import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePokemon = (props) => {
  const name = useParams();
  const [pokemon, setPokemon] = useState([]);
  const getData = async () => {
    const pokemonRes = await axios
      .get("https://pokeapi.co/api/v2/pokemon/" + name.data)
      .then((res) => {
        const imageUrl = res.data.sprites.other.dream_world.front_default;
        let { hp, atk, def, spd, spAtk, spDef } = "";
        res.data.stats.map((stat) => {
          switch (stat.stat.name) {
            case "hp":
              hp = stat["base_stat"];
              break;
            case "attack":
              atk = stat["base_stat"];
              break;
            case "defense":
              def = stat["base_stat"];
              break;
            case "speed":
              spd = stat["base_stat"];
              break;
            case "special-attack":
              spAtk = stat["base_stat"];
              break;
            case "special-defense":
              spDef = stat["base_stat"];
              break;
          }
        });
        const types = res.data.types.map((type) => type.type.name);
        const abilities = res.data.abilities.map((ability) => {
          return ability.ability.name
            .toLowerCase()
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
        });
        const evs = res.data.stats
          .filter((stat) => {
            if (stat.effort > 0) {
              return true;
            }
            return false;
          })
          .map((stat) => {
            return `${stat.effor} ${stat.stat.name}`
              .toLowerCase()
              .split("-")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ");
          });

        axios
          .get("https://pokeapi.co/api/v2/pokemon-species/" + name.data + "/")
          .then((res) => {
            let description = "";
            res.data.flavor_text_entries.some((flavor) => {
              if (flavor.language.name === "en") {
                description = flavor.flavor_text;
                return;
              }
            });
            const femaleRate = res.data["gender_rate"];
            const genderRatioFemale = 12.5 * femaleRate;
            const genderRatioMale = 12.5 * (8 - femaleRate);
            const catchRate = Math.round(
              (100 / 255) * res.data["capture_rate"]
            );

            const eggGroups = res.data["egg_groups"].map((group) => {
              return group.name
                .toLowerCase()
                .split("-")
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(" ");
            });
            const info = {
              description: description,
              genderRatioFemale: genderRatioFemale,
              genderRatioMale: genderRatioMale,
              catchRate: catchRate,
              eggGroups: eggGroups,
              imageUrl: imageUrl,
              name: name.data,
              types: types,
              hp: hp,
              atk: atk,
              def: def,
              spd: spd,
              spAtk: spAtk,
              spDef: spDef,
            };
            setPokemon(info);
          });
      });
  };

  useEffect(() => {
    getData();

  }, []);

  const color = {
    grass: { backgroundColor: "rgb(97,192,28)" },
    fire: { backgroundColor: "rgb(232,85,49)" },
    bug: { backgroundColor: "rgb(160,170,27)" },
    dark: { backgroundColor: "rgb(78,57,43)" },
    dragon: { backgroundColor: "rgb(115,94,223)" },
    electric : { backgroundColor: "rgb(247,186,43)" },
    fairy : { backgroundColor: "rgb(248,177,246)" },
    fighting : { backgroundColor: "rgb(126,60,41)" },
    flying : { backgroundColor: "rgb(141,166,240)" },
    ghost : { backgroundColor: "rgb(100,100,186)" },
    ground : { backgroundColor: "rgb(212,183,100)" },
    ice : { backgroundColor: "rgb(119,208,237)" },
    normal : { backgroundColor: "rgb(199,195,182)" },
    poison : { backgroundColor: "rgb(137,66,139)" },
    psychic : { backgroundColor: "rgb(238,71,127)" },
    rock : { backgroundColor: "rgb(192,167,74)" },
    steel : { backgroundColor: "rgb(177,176,192)" },
    water : { backgroundColor: "rgb(59,155,236)" },


  };


  let colored = null;
  let colored2 = null;
  let test1={
    value : null,
    key : null
  }

  let test2={
    value : null,
    key : null
  }

  for (const [key, value] of Object.entries(color)) {
    if (pokemon.types) {
      if (key == pokemon.types[0]) {
        colored = value
        test1.value = value
        test1.key = key
      }
      if (key == pokemon.types[1]) {
        colored2 = value
        test2.value = value
        test2.key = key
      }
    }
  }


  return (
    <div className="card_pokemon">
      <div className="container">
        <div className="info_pokemon">
          <div className="data">
            <img src={pokemon.imageUrl} alt="pokemon" />
          </div>
          <div className="data">
            <div className="name">
              <h2>{pokemon.name}</h2>
                {pokemon.types && 
                   <div  className="types">{pokemon.types.map(type =>(
                    
                    <span style={type==test1.key ? colored : colored2} className="type">{type}</span>
                    
                )
                )}</div>
                }
           
            </div>
            <div className="stats">
              <div>HP : {pokemon.hp}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${pokemon.hp / 2}%` }}
                ></div>
              </div>
            </div>
            <div className="stats">
              <div>Attack : {pokemon.atk / 2}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${pokemon.atk / 2}%` }}
                ></div>
              </div>
            </div>
            <div className="stats">
              <div>Defense : {pokemon.def}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${pokemon.def / 2}%` }}
                ></div>
              </div>
            </div>
            <div className="stats">
              <div>Speed : {pokemon.spd}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${pokemon.spd / 2}%` }}
                ></div>
              </div>
            </div>
            <div className="stats">
              <div>Special attack : {pokemon.spAtk}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${pokemon.spAtk / 2}%` }}
                ></div>
              </div>
            </div>
            <div className="stats">
              <div>Special defense : {pokemon.spDef}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${pokemon.spDef / 2}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="description">{pokemon.description}</div>
      </div>
      <button  className="return">
        <a href="/">Go back</a>
      </button>

    </div>
  );
};

export default SinglePokemon;
