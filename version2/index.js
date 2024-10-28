// ..............................................Array of Objects..................................................\\
let recipes = [];

// ..............................................Code to create and Display Recipe Cards............................\\
const displayRecipes = () => {
    const recipelist = document.querySelector("#recipelist");
    recipelist.innerHTML = "";

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("bg-white", "p-4", "rounded", "shadow", "m-4");

        recipeCard.innerHTML = `
        <h2 class="text-lg font-bold">${recipe.title}</h2>
        <p class="text-sm text-gray-400 font-thin"><strong>Ingredients: </strong>${recipe.ingredients}</p>
        <p class="text-sm font-thin"><strong>Steps: </strong>${recipe.steps}</p>
        <button class="bg-blue-500 text-white px-2 py-1 rounded mt-2" onclick="editRecipe(${index})">Edit</button>
        <button class="bg-red-500 text-white px-2 py-1 rounded m-2" onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipelist.appendChild(recipeCard);
    });
}
//..................................................save recipe....................................................\\
const saveRecipeToLocalStorage = ()  => {
    localStorage.setItem("recipes", JSON.stringify(recipes))
}

const loadRecipesFromLocalStorage = () =>{
    const storedRecipe = localStorage.getItem("recipes");
     
    if (storedRecipe){
        recipes = JSON.parse(storedRecipe)
    }
}
//................................................code to error message............................................\\
 const showError = (elementId, message)  => {
    const errorElement = document.getElementById(elementId);
    errorElement.classList.remove("hidden");
 }

 const hideError = (elementId) => {
    const errorElement = document.getElementById(elementId);
    errorElement.classList.add("hidden")
 }

// ...................................................Code to Add Recipe...........................................\\
const addRecipe = (event) => {
    event.preventDefault();
    const recipeTitle = document.getElementById("recipeTitle").value.trim();
    const recipeIngredients = document.getElementById("recipeIngredients").value.trim();
    const recipeStep = document.getElementById("recipeStep").value.trim();


    hideError("titileError");
    hideError("IngredientsError");
    hideError("stepsError");

        let isvalid = true;

        if  (recipeTitle === "") {
            showError("titileError", "please enter the recipe title");
            isvalid = false;
        }

        if (recipeIngredients === "") {
            showError("IngredientsError", "please enter the recipe ingredients");
            isvalid = false;
        }

        if (recipeStep === "") {
            showError("stepsError", "please enter the recipe steps");
            isvalid = false;
        }

        if (isvalid){
        const isDuplicated = recipes.some((recipe) => recipe.title.toLowerCase() === recipeTitle.toLowerCase());
        if (isDuplicated) {
            alert("Recipe already exists");
        } else {
            const newRecipe = {
                title: recipeTitle,
                ingredients: recipeIngredients,
                steps: recipeStep,
            };
            recipes.push(newRecipe);

            document.getElementById("recipeTitle").value = "";
            document.getElementById("recipeIngredients").value = "";
            document.getElementById("recipeStep").value = "";

            saveRecipeToLocalStorage();
            displayRecipes();
        }
        }

}
//....................................................add edit function.............................................\\
const editRecipe = (index) =>{
    const UpdateRecipeTitle = prompt("Enter recipe title", recipes[index].title);
    const UpdateRecipeIngrdients = prompt("Enter recipe Ingredients", recipes[index].ingredients);
    const UpdateRecipeSteps = prompt("Enter recipe steps", recipes[index].steps);

    if(UpdateRecipeTitle && UpdateRecipeIngrdients && UpdateRecipeSteps){
        recipes[index].title = UpdateRecipeTitle;
        recipes[index].ingredients = UpdateRecipeIngrdients;
        recipes[index].steps = UpdateRecipeSteps;

        saveRecipeToLocalStorage();
        displayRecipes();
    }
}
//.................................................add delete function...............................................\\
const deleteRecipe = (index) => {
    recipes.splice(index,1);
    saveRecipeToLocalStorage();
    displayRecipes();
}
// ...........................................Code to make Add Recipe Button Functional............................\\
document.querySelector("#addRecipe").addEventListener("click", addRecipe);

loadRecipesFromLocalStorage();

displayRecipes();