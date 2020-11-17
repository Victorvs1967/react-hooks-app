import React, { useContext } from 'react';

import './App.css';

import RecipeList from './components/RecipeList';
import { RecipeContext } from './context/index';

const App = () => {

  const appContext = useContext(RecipeContext);
  const { loading, search } = appContext;

  return (
    <>
      {
        loading ? <h2 className="text-center">...loading {search} recipes</h2> :
        <RecipeList />
      }
    </>
  );
}

export default App;
