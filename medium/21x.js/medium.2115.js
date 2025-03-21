/**
 * 2115. Find All Possible Recipes from Given Supplies
 *
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
    const availableSupplies = new Set();
    const recipeToIndex = new Map();
    const dependencyGraph = new Map();

    for (const supply of supplies) {
        availableSupplies.add(supply);
    }

    for (let i = 0; i < recipes.length; i++) {
        recipeToIndex.set(recipes[i], i);
    }

    const inDegree = Array(recipes.length).fill(0);

    for (let recipeIdx = 0; recipeIdx < recipes.length; recipeIdx++) {
        for (const ingredient of ingredients[recipeIdx]) {
            if (!availableSupplies.has(ingredient)) {
                dependencyGraph.has(ingredient) || dependencyGraph.set(ingredient, []);
                dependencyGraph.get(ingredient).push(recipes[recipeIdx]);
                inDegree[recipeIdx]++;
            }
        }
    }

    const queue = [];
    for (let recipeIdx = 0; recipeIdx < recipes.length; recipeIdx++) {
        if (inDegree[recipeIdx] === 0) {
            queue.push(recipeIdx);
        }
    }

    const createdRecipes = [];
    let pntQueue = 0;
    while (pntQueue < queue.length) {
        const recipeIdx = queue[pntQueue++];
        const recipe = recipes[recipeIdx];
        createdRecipes.push(recipe);

        // Skip if no recipes depend on this one
        if (!dependencyGraph.has(recipe)) continue;

        // Update recipes that depend on current recipe
        for (const dependentRecipe of dependencyGraph.get(recipe)) {
            if (--inDegree[recipeToIndex.get(dependentRecipe)] == 0) {
                queue.push(recipeToIndex.get(dependentRecipe));
            }
        }
    }

    return createdRecipes;
};

console.log(findAllRecipes(["bread"], [["yeast", "flour"]], ["yeast", "flour", "corn"]));
console.log(
    findAllRecipes(
        ["bread", "sandwich"],
        [
            ["yeast", "flour"],
            ["bread", "meat"]
        ],
        ["yeast", "flour", "meat"]
    )
);
console.log(
    findAllRecipes(
        ["bread", "sandwich", "burger"],
        [
            ["yeast", "flour"],
            ["bread", "meat"],
            ["sandwich", "meat", "bread"]
        ],
        ["yeast", "flour", "meat"]
    )
);
