import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const [data_pokemon, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(props.url);
    const data = await response.json();
    const sprite = data.sprites.other.dream_world.front_default;

    setData(data);
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

  for (const [key, value] of Object.entries(color)) {
    if (data_pokemon.types) {
      if (key == data_pokemon.types[0].type.name) {
        colored = value
      }
    }
  }


  return (
    <div className="card" style={colored}>
      <Link to={'/'+props.pkmn}>
        <h2 className="pkmon_name">{props.pkmn}</h2>
        {data_pokemon.sprites && (
          <svg width="90" height="90">
            <image
              href={data_pokemon.sprites.other.dream_world.front_default}
              src="yourfallback.png"
              width="90"
              height="90"
            />
          </svg>
        )}
      </Link>
    </div>
  );
};

export default Pokemon;
