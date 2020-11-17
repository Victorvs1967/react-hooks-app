import React, { useContext } from 'react';

import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
import { RecipeContext } from '../context/index';

const RecipeList = () => {
    
    const appContext = useContext(RecipeContext);
    const { showHomeButton, recipes, handleReturnHome } = appContext;
    
    return (
        <>
            <RecipeSearch />
            <div className="container my-5">
                {showHomeButton && <button type="button" className="btn btn-warning" onClick={() => handleReturnHome()}>Go Back Home</button>}
                <div className="d-flex justify-content-center text-uppercase mb-3">
                    <h2 className="text-slaned">Recipe List</h2>
                </div>
                <div className="row">
                    {recipes && recipes.map(
                        recipe => {
                            const _recipe = recipe.recipe;
                            return <Recipe key={_recipe.uri} recipe={_recipe} />;
                        })}                
                </div>
            </div>
        </>
    );
}

export default RecipeList;
