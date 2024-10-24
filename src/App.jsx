import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipeSec from "./Components/OurRecipeSec";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [recipeQue, setRecipeQue]=useState([]);
  const [prepareRecipe, setPrepareRecipe]=useState([])
  const [totalTime, setTotalTime]=useState(0);
  const [totalCalore, setTotalCalore]=useState(0);
  const handleAddToRecipeQue=(recipe)=>{
    const isExist=recipeQue.find(previousRecipe=>previousRecipe.recipe_id===recipe.recipe_id);
    if(!isExist){
      setRecipeQue([...recipeQue, recipe]);
    }
    else{
      alert('Allredi exist!!')
    }
    
  }
  const handleRemove=id=>{
    // find which recipe to remove
    const deletedRecipe=recipeQue.find(recipe=>recipe.recipe_id===id)
    // remove form want to cook table
    const updatedQue=recipeQue.filter(recipe=>recipe.recipe_id !==id)
    setRecipeQue(updatedQue);
    setPrepareRecipe([...prepareRecipe, deletedRecipe])
  }
  const calculateFunc=(time, calore)=>{
    setTotalTime(totalTime+time);
    setTotalCalore(totalCalore+calore)
  }
  return (
    <div className="container mx-auto">
      <Header/>
      <Banner/>
      <OurRecipeSec/>
      {/* Recipe card section */}
      <section className="flex flex-col md:flex-row">
        {/* Cards Sec */}
        <Recipes handleAddToRecipeQue={handleAddToRecipeQue}/>
        {/* Sidebar */}
        <Sidebar handleRemove={handleRemove} totalTime={totalTime} totalCalore={totalCalore}  recipeQue={recipeQue} prepareRecipe={prepareRecipe} calculateFunc={calculateFunc}/>
      </section>
    </div>
  );
};

export default App;