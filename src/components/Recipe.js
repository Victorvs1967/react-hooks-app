import React, { useState } from 'react';

import RecipeDetails from './RecipeDetails';

const Recipe = ({ recipe }) => {

    const { image: image_url, source: publisher, label: title, uri: recipe_id } = recipe;
    const [ showInfo, setShowInfo ] = useState(false);
    const [ recipeDetails, setRecipeDetails ] = useState([]);
    const { ingredientLines: ingredients, yield: social_rank } = recipeDetails;

    const handleShowInfo = event => {
        let { id } = event.target.dataset;
        id = id.replace('#', '%23');
        const url = `https://api.edamam.com/search?app_id=91adf630&app_key=41eb301d624530cf6d52cc80e8105c84&r=${id}`;
        if (!showInfo) {
            fetch(url)
            .then(response => response.json())
            .then(result => setRecipeDetails(result[0]))           
        }
        setShowInfo(!showInfo);
    }

    return (
        <>
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card"  style={{minHeight: '28rem'}}>
                    <img src={image_url} alt="recipe" className="img-card-top" style={{height: '14rem', objectFit: 'cover', objectPosition: 'center'}} />
                    <div className="card-body text-capitalize">
                        <h6>{title}</h6>
                        <h6 className="text-warning">
                            Provided by: {publisher}
                        </h6>
                    </div>
                    <div className="card-footer">
                        <button type="button" style={{margin: '13px'}}
                            className="btn btn-primary text-center" data-id={recipe_id} onClick={handleShowInfo}>
                            Ingredients
                        </button>
                        <RecipeDetails key={recipe_id} ingredients={ingredients} social_rank={social_rank} showInfo={showInfo} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recipe;
