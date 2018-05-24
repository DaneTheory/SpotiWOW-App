import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';


export default class Head extends Component {

  render() {
    return (
        <SearchBar {...this.props}/>
    );
  }

}
