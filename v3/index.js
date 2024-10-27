const recipes = [
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
    }
];

const  displayRecipes = () =>{
    const recipelist = document.querySelector("#recipelist");
    recipelist.innerHTML = "",

    recipes.forEach((recipes) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("bg-white","p-4","rounded","m-4");

        recipeCard.innerHTML = `
        <h2 class="text-lg font-bold"> ${recipes.title}<h2>
        <p class="text-sm text-gray-600"><strong class>Ingredients: &emsp;</strong> ${recipes.ingredients}</p>
        <p class="text-sm text-black"><strong class>steps: &emsp;</strong> ${recipes.steps}</p>
        `;
        recipelist.appendChild(recipeCard);
    })
}

displayRecipes();