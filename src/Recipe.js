import React from "react";
import style from "./recipe.module.css";

//const [isBad, setBad] = useState(false);

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p className={calories > 3500 ? style.caloriesBad : style.caloriesOk}>
        Calories : {calories}
      </p>
      <img className={style.image} src={image} alt="" />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
