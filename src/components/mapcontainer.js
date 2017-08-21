import React, { PureComponent } from 'react'
import {Card,} from 'material-ui/Card';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




class MapContainer extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {

    const currentLoc = this.props.articles[0]
    const articles = this.props.articles.map((article, index) => {
      return (
        <Marker key={index} onClick={this.onMarkerClick}
                name={article.title}
                position= {{lat: article.lat, lng: article.lng}}/>
      )
      });

    if (!currentLoc) return null

    return (
      <Map
          options={"scrollwheel: false"}
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={3}
          scrollwheel={false}
          initialCenter={{
            lat: currentLoc.lat,
            lng: currentLoc.lng
          }}

          >
          {articles}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )

  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyDG-PV0r3_hKyU3YqU9OnIZmEAamLxrurM')
})(MapContainer)
