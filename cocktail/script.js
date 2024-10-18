function showCocktail() {
    const cocktailImage = document.getElementById("cocktail-image");
    const cocktailName = document.getElementById("cocktail-name");
    const cocktailRecipe = document.getElementById("cocktail-recipe");
    const recipeSection = document.getElementById("recipe-section");

    // Update cocktail information
    //cocktailImage.src ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fcocktails.html&psig=AOvVaw1SsCekZhao2YFap3KIL7bY&ust=1729337559729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiUtNrql4kDFQAAAAAdAAAAABAE"
    cocktailImage.src = "https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg"; // Example image URL
    cocktailName.textContent = "Margarita";
    
    // Display the recipe
    cocktailRecipe.textContent = `
        - 1 1/2 oz Tequila
        - 1/2 oz Triple sec
        - 1 oz Lime juice
        - Salt for rim
        - Lime wedge for garnish
    `;

    // Show the recipe section
    recipeSection.style.display = "block";
}