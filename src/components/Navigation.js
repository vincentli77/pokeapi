import React from "react";

const Navigation = () => {
  return (
      <div className="header">
        <h1>POKEDEX </h1>
        <ul className="gen">
            <li><a href="/">Géneration 1 </a> </li>
            <li><a href="/2">Géneration 2 </a> </li>
            <li><a href="/3">Géneration 3 </a> </li>
            <li><a href="/4">Géneration 4 </a> </li>
            <li><a href="/5">Géneration 5 </a> </li>

        </ul>
      </div>
  );
};

export default Navigation;
