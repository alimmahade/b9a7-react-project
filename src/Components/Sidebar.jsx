/* eslint-disable react/prop-types */
const Sidebar = ({recipeQue, handleRemove, prepareRecipe, calculateFunc, totalTime, totalCalore}) => {
    return (
        <div className="md:w-1/3 border-2 text-gray-400 rounded-lg ml-4 p-2">
            <div className="overflow-x-auto">
                <h1 className="text-2xl font-semibold mx-auto border-b-2 text-center pb-2">Want to cook: {recipeQue.length}</h1>
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        recipeQue.map((recipe,i)=><tr className="hover" key={i}>
        <th>{i+1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <td><button onClick={()=>{handleRemove(recipe.recipe_id) 
            calculateFunc(recipe.preparing_time,recipe.calories)}} className="btn">Prepare</button></td>
      </tr>)
      }
    </tbody>
  </table>
  {/* Currently Cook */}


  {/*  */}
  <h1 className="text-2xl font-semibold mx-auto border-b-2 text-center pb-2 mt-8">Currently cook: {prepareRecipe.length}</h1>
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {
        prepareRecipe.map((recipe,i)=><tr className="hover" key={i}>
        <th>{i+1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
      </tr>)
      }
      <tr className="hover border-none">
        <td></td>
        <td></td>
        <td>Totla Time: {totalTime}</td>
        <td>Total Calories: {totalCalore}</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Sidebar;