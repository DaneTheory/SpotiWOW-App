import React, { Component } from 'react';

import PlayIcon from './PlayIcon';

import * as actions from '../actions/AppActions';



export default class SpotifyListData extends Component {

  _onClickHandler(e){
    e.preventDefault();

    if(this.props.artistsActive) {
       this.props.dispatch(actions.fetchAlbums(e.currentTarget.querySelector(".spotify__id").innerText))
    }

    if(this.props.albumsActive) {
      this.props.dispatch(actions.fetchTracks(e.currentTarget.querySelector(".spotify__id").innerText))
    }
  }




  render() {
    const spotifyList = this.props.spotifyData.map((spotify) => {
        return {
          name: spotify.name,
          id: spotify.id,
          uri: spotify.uri,
          href: spotify.href,
          urls: spotify.urls.spotify,
          dur: spotify.dur,
          preview: spotify.preview,
          trackNum: spotify.trackNum,
          images: () => {
            if (!this.props.tracksActive) {
              const spotifyDataWithoutImages = <img src={`https://dummyimage.com/640x640/000000/fff.png&text=No+Image+Available`} />
              const spotifyDataWithImages = spotify.images.map((img) => {
                if(img.height >= 600){
                  return img.url
                }
                }).map((url) =>
                  <img src={url} />
                )
                if(spotify.images.length === 0) {
                  return spotifyDataWithoutImages
                } else {
                  return spotifyDataWithImages
                }

            }
          }
        }
    })


let content;

if(this.props.artistsActive) {
  content = spotifyList.map((item) =>
              <div className="content__spotify__item"
                onClick={this._onClickHandler.bind(this)}>
                <div id="artist__image" className="spotify__image">{item.images()}</div>
                <div id="artist__name" className="spotify__name">{item.name}</div>
                <div id="artist__id" className="spotify__id">{item.id}</div>
                <div id="artist__uri" className="spotify__uri">{item.uri}</div>
                <div id="artist__href" className="spotify__href">{item.href}</div>
                <div id="artist__urls" className="spotify__urls">{item.urls}</div>
              </div>
            )
}

if(this.props.albumsActive) {
    content = spotifyList.map((item) =>
                <div className="content__spotify__item"
                  onClick={this._onClickHandler.bind(this)}>
                  <div id="album__image" className="spotify__image">{item.images()}</div>
                  <div id="album__name" className="spotify__name">{item.name}</div>
                  <div id="album__id" className="spotify__id">{item.id}</div>
                  <div id="album__uri" className="spotify__uri">{item.uri}</div>
                  <div id="album__href" className="spotify__href">{item.href}</div>
                  <div id="album__urls" className="spotify__urls">{item.urls}</div>
                </div>
              )
}

if(this.props.tracksActive) {
  content = spotifyList.map((item) =>
              <div className="content__track__item"
                onClick={this._onClickHandler.bind(this)}>
                <div id="track__trackNum" className="spotify__trackNum">{item.trackNum}</div>
                <div id="track__name" className="spotify__name">{item.name}</div>
                <div id="track__id" className="spotify__id">{item.id}</div>
                <div id="track__uri" className="spotify__uri">{item.uri}</div>
                <div id="track__href" className="spotify__href">{item.href}</div>
                <div id="track__urls" className="spotify__urls">
                  <a target="_blank" href={item.urls} onClick={(()=> {
                    window.open(item.urls, '_blank');
                  })}>
                    <PlayIcon />
                  </a>
                    </div>
                <div id="track__dur" className="spotify__dur">{item.dur}</div>
                <div id="track__preview" className="spotify__preview">{item.preview}</div>
              </div>
            )
}

    return (
        <div className="content__spotify__list">
          {content}
        </div>
    );
  }
}
