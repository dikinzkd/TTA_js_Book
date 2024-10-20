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

const addRecipe = (event) =>{
      event.preventDefault();
      const recipeTitle = document.getElementById("recipeTitle").value;
      const recipeIngredients = document.getElementById("recipeIngredients").value;
      const recipeStep = document.getElementById("recipeStep").value;

      if (recipeTitle.trim() !== "" && recipeIngredients.trim() !== "" && recipeStep.trim() !== "") {
        const newRecipe ={
            title: recipeTitle,
            ingredients: recipeIngredients,
            steps: recipeStep,
        }
        recipes.push(newRecipe);
        
        document.getElementById("recipeTitle").value ="";
        document.getElementById("recipeIngredients").value ="";
        document.getElementById("recipeStep").value ="";
 
        dispalyRecipes();
      }else{
        alert("please fill out all the fields")
      }
}

const recipeForm = document.getElementById("recipeForm");
recipeForm.addEventListener("submit", addRecipe);

dispalyRecipes();