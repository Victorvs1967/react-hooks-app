import React, { createContext, useState, useEffect } from 'react';

const api = 'https://api.edamam.com/search?app_id=91adf630&app_key=41eb301d624530cf6d52cc80e8105c84&from=0&to=30&q=';
let url = `${api}coffee`;

const RecipeContext = createContext();

const RecipeProvider = props => {

    const [ showHomeButton, setShowHomeButton ] = useState(false);
    const [ recipes, setRecipes ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ search, setSearch ] = useState('');

    const fetchRecipes = () => {
    fetch(url)
    .then(response => response.json())
    .then(result => setRecipes(result.hits))
    .catch(error => console.error('Error fetch data: ', error.message))
    setLoading(false);
    }
    const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    url = `${api}${search}`;
    fetchRecipes();
    setShowHomeButton(true);
    } 
    const handleSearchChange = event => setSearch(event.target.value);
    const handleReturnHome = () => {
    url = `${api}coffee`;
    fetchRecipes();
    setShowHomeButton(false);
    };

    useEffect(() => fetchRecipes(), []);

    return (
        <RecipeContext.Provider value={{
            loading,
            search,
            showHomeButton,
            recipes,
            handleSearchChange,
            handleSubmit,
            handleReturnHome
        }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
const RecipeConsumer = RecipeContext.Consumer;
export { RecipeProvider, RecipeConsumer, RecipeContext };