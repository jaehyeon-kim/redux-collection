import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import './RecipeFinder.css';

class RecipeFinder extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeFinder;
