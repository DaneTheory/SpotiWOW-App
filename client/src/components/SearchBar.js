import React, { Component } from 'react';

import * as actions from '../actions/AppActions';
import SearchIcon from './SearchIcon';

import './searchStyles.scss';


export default class SearchBar extends Component {
  constructor(props) {
  super(props);
  this.state = {
    query: ''
  };
}

  _inputValueHandler(e){
    e.preventDefault();
    this.setState({query: e.target.value})
  }

  _onSubmitHandler(e){
    e.preventDefault();
    this.props.dispatch(actions.fetchArtists(this.state.query))
  }

  render() {

    return (
      <form className="search__form__wrapper">
        <input id="search__bar"
          className="search__input"
          type="search"
          placeholder="Type Here..."
          onChange={this._inputValueHandler.bind(this)} >
        </input>
        <button className="search__bttn"
          type="submit"
          onClick={this._onSubmitHandler.bind(this)}>
          <SearchIcon />
        </button>
      </form>
    );
  }
};
