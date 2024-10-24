/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({handleAddToRecipeQue}) => {
    const [recipes, setRecipes]= useState([])
    useEffect(()=>{
        fetch('/fake.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
{
    recipes.map(recipe=> <div key={recipe.recipe_id} className="card bg-base-100 border-2">
        <figure>
          <img
            src={recipe.recipe_image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe.recipe_name}</h2>
          <p>{recipe.short_description}</p>
          <h3>Ingredients: {recipe.ingredients.length}</h3>
          {
            recipe.ingredients.map((item,i)=><li className="ml-5" key={i}>{item}</li>)
          }
          <div className="flex gap-4 justify-between">
            <div className="flex items-center">
                    <i className="fa-regular fa-clock mr-3"></i>
                    <p>{recipe.preparing_time}</p>
            </div>
            <div className="flex items-center">
                    <i className="fa-solid fa-fire-flame-curved mr-3"></i>
                    <p>{recipe.calories}</p>
            </div>
          </div>
          <div className="card-actions">
            <button onClick={()=>handleAddToRecipeQue(recipe)} className="btn">Want to cook</button>
          </div>
        </div>
      </div>)
}
            </div>
        </div>
    );
};

export default Recipes;