import React, { useContext } from 'react';

import { RecipeContext } from '../context/index';

const RecipeSearch = () => {

    const appContext = useContext(RecipeContext);
    const { handleSubmit, handleSearchChange } = appContext;
    
    return (
        <div className="container d-flex justify-content-center my-5 col-sm-12">
            <form className="form-inline" onSubmit={event => handleSubmit(event)}>
                <label htmlFor="search" className="mr-2">Search:</label>
                <input data-age="Love" onChange={event => handleSearchChange(event)} type='text' placeholder='coffee' className="form-control" id="search" name='search' />
                <button type="submit" className="btn btn-primary ml-1"><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
}

export default RecipeSearch;
