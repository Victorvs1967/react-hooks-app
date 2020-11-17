import React from 'react';

const RecipeDetails = ({ ingredients, showInfo, social_rank }) => (
    <>
        {showInfo && 
        <button type="button" style={{margin: '13px'}}
            className="btn btn-success text-center font-weight-bold">
            Yield: {social_rank}
        </button>}
        {showInfo && ingredients ? ingredients.map((item, index) => {
            return <ul key={index} className="list-group">
                <li className="list-group-item">
                    {item}
                </li>
            </ul>
        }) : null}
    </>
);

export default RecipeDetails;
