import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import { Button, TextField, Grid } from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('mint');
  const [search, setSearch] = useState(false);
 
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;
  
  useEffect(() => {
    getData();
    setQuery(""); //to reset the input text
  }, [search]); //gets executed when the page renders



  let handleChange = (event) => {
    //console.log(event.target.value);
    setQuery(event.target.value);
    console.log(query);
  }

  let handleClick = (event) => {
    event.preventDefault(); //to prevent the page (form) refresh
    setSearch(true);
  }

  const getData = async () => {
    var response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    var data = await response.json();
    var items = data.hits;
    setRecipes(items);
    console.log(recipes);
  }
  return <div>
    <Header />
    <Grid
  container
  direction="column"
  justify="space-between"
  alignItems="center"
>
    <form>
      <TextField id="outlined-basic" label="Food Item" type="text" value={query} onChange={handleChange} />
      <Button variant="contained" color="secondary" onClick={handleClick}><SearchOutlinedIcon /></Button>
    </form>
    {recipes.map((recipe, idx) => (
      <Recipe
        key={idx}
        label={recipe.recipe.label}
        image={recipe.recipe.image}
        mealType={recipe.recipe.mealType}
        calories={recipe.recipe.calories}
        dishType={recipe.recipe.dishType}
        ingredients={recipe.recipe.ingredientLines}
      />
    ))}
  </Grid>
  <Footer />
  </div>
  
}

export default App;

