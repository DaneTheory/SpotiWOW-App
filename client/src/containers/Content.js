import React, { Component } from 'react';

import SpotifyListData from '../components/SpotifyListData';


export default class Content extends Component {

  render() {

    return (
      <div className="content__main__wrapper">
        <SpotifyListData {...this.props}/>
      </div>
    );
  }

}
