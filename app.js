function toggleRecipe(dishElement) {
    const recipe = dishElement.querySelector('.recipe');
    if (recipe.style.display === 'block') {
      recipe.style.display = 'none';
    } else {
      recipe.style.display = 'block';
    }
  }
  