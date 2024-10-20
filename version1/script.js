const recipes =[
    {
        title: "Spaghetti Bolognese",
        ingredients: "Spaghetti, Ground Beef, Tomato Sauce, Garlic, Onions, Olive Oil",
        steps: "1. Boil pasta. 2. Cook ground beef. 3. Add sauce and garlic. 4. Mix with pasta."
    },
    {
        title: "Chicken Curry",
        ingredients: "Chicken, Curry Powder, Coconut Milk, Onions, Garlic, Ginger",
        steps: "1. Cook chicken. 2. Add onions, garlic, ginger. 3. Add coconut milk and curry powder. 4. Simmer."
    },
    {
        title: "Vegetable Stir-fry",
        ingredients: "Broccoli, Carrots, Bell Peppers, Soy Sauce, Garlic, Olive Oil",
        steps: "1. Stir-fry vegetables in olive oil. 2. Add garlic and soy sauce. 3. Serve with rice."
    },
    // {
    //     title: "Pancakes",
    //     ingredients: "Flour, Eggs, Milk, Sugar, Baking Powder, Salt",
    //     steps: "1. Mix ingredients in a bowl. 2. Pour batter on a hot griddle. 3. Flip pancake when bubbles form."
    // },
];

const dispalyRecipes = () =>{
    const recipelist = document.querySelector("#recipelist");
    recipelist.innerHTML ="";

    recipes.forEach((recipe) =>{
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("bg-white", "p-4","rounded", "shadow", "m-4");

        recipeCard.innerHTML =`
        <h2  class="text-lg font-bold">${recipe.title}</h2>
        <p class="text-sm text-gray-400"><strong>Ingredients: <strong/>${recipe.ingredients}</p>
        <p  class="text-sm"><strong>Steps: <strong/>${recipe.steps}</p>
        `;
        recipelist.appendChild(recipeCard);
    }
)
}

const addRecipe =() =>{
    const recipeTitle =document.querySelector("#recipeTitle");
    const recipeIngredients = document.querySelector("#recipeIngredients");
    const recipeSteps = document.querySelector("#recipeStep");

    const recipeTitles = recipeTitle.value.trim();
    const RecipeIngredients = recipeIngredients.value.trim();
    const RecipeSteps = recipeSteps.value.trim();

    if(recipeTitles !== "" && RecipeIngredients !== "" && RecipeSteps !== "") {
       const newRecipe ={
           title: recipeTitle,
           ingredients: recipeIngredients,
           steps: recipeSteps,
       }
       recipes.push(newRecipe);
       
       recipeTitle.value ="";
       recipeIngredients.value ="";
       recipeSteps.value ="";

       dispalyRecipes();
    }else{
        alert("please fill out all fields")
    }
}

const addRecipeBtn = document.querySelector("#Addrecipe");
addRecipeBtn.addEventListener("click",addRecipe);

dispalyRecipes();

