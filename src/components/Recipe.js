import React from "react";
import { Card } from "@material-ui/core";


const Recipe = ({label, image, mealType, calories, dishType, ingredients}) => {

    const cardStyle = {
        textAlign: "left",
        padding: "20px",
        margin: "30px auto",
        width: "50%",
        fontFamily: "'Poppins', sans-serif", 
        borderWidth: "3px",
        boxShadow: "17px 17px 35px -14px rgba(46,43,43,0.51)",
        WebkitBoxShadow: "17px 17px 35px -14px rgba(46,43,43,0.51)",
        MozBoxShadow: "17px 17px 35px -14px rgba(46,43,43,0.51)"
    }

    const imgStyle = {
        height: "200px",
        width: "200px",
        borderRadius: "100px"
    }



    return(<Card variant="outlined" className="recipe-card" style={cardStyle}>
        <h1>{label}</h1>
        <img style={imgStyle} src = {image} alt="" />
        <h2>Meal Type:  {mealType}</h2>
        <h3>Calories:   {calories.toFixed(2)} C</h3>
        <h3>Dish Type:  {dishType}</h3>
        <h2>Ingredients: </h2>
        <ul>
            {ingredients.map((ingredient, idx) =>(
                <li style={{listStyleType: "square"}} key={idx}>{ingredient}</li>
            ))}
        </ul>
    </Card>)
}


export default Recipe;