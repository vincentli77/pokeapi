import React from "react";

const Navigation = () => {
  return (
      <div className="header">
        <h1>POKEDEX </h1>
        <ul className="gen">
            <li><a href="/pokeapi/">Géneration 1 </a> </li>
            <li><a href="/pokeapi/generation_2">Géneration 2 </a> </li>
            <li><a href="/pokeapi/generation_3">Géneration 3 </a> </li>
            <li><a href="/pokeapi/generation_4">Géneration 4 </a> </li>
            <li><a href="/pokeapi/generation_5">Géneration 5 </a> </li>

        </ul>
      </div>
  );
};

export default Navigation;
