import React, { Component } from 'react';
import {connect} from 'react-redux'

import Head from './Head';
import Content from './Content';

import './headerStyle.scss';
import './contentStyle.scss';

class Home extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="region__wrapper">
        <div id="region__header__wrapper">
          <Head {...this.props}/>
        </div>
        <div id="region__content__wrapper">
          <Content {...this.props} />
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
   return {...state.spotifyData}
}

export default connect(mapStateToProps)(Home);
