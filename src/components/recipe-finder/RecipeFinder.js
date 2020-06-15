import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import './RecipeFinder.css';

class RecipeFinder extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
      </div>
    );
  }
}

export default RecipeFinder;
