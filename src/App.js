import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "5360c964";
  const APP_KEY = "8d8d3dd0e0e1227b934ca86a659bd6d0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]); //update seulement quand query change cad quand on click sur le bouton submit

  //function qui fetch les data et qui setRecipes
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(response);

    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
    console.log(data.hits);
  };

  //function qui définie la var search
  const updateSearch = (e) => {
    setSearch(e.target.value); //set le search dès que la value dans la barre de recherche change
  };

  //function déclenchée lorsqu'on submit la recherche
  const getSearch = (e) => {
    e.preventDefault(); //Stop page refresh
    setQuery(search); // set value of query to the finished text
    console.log(`query : ${search}`);
    setSearch("");
  };

  return (
    <div className="App">
      <h1 className="title">Marmitam</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch} //run function dès que ça change
        />
        <button className="search-button" type="submit">
          Search that good stuff
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
