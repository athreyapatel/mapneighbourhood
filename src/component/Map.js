/* global google */
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
 } from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props =>(
  <GoogleMap
    defaultZoom={8}
    zoom={props.zoom}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    center={{
        lat: parseFloat(props.center.lat),
        lng: parseFloat(props.center.lng)
    }}
    >
    {props.markers && props.markers.filter(marker => marker.isVisible).map((marker, index,arry) => {
      const venueDetails = props.venues.find(venue => venue.id === marker.id);
      return (
         <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => props.markerHadelr(marker)}
          animation={arry.length === 1 ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP}
          >
          {marker.isOpen && venueDetails.bestPhoto && (
              <InfoWindow>
                <React.Fragment>
                  <img className="venuePhoto" src={`${venueDetails.bestPhoto.prefix}200x200${venueDetails.bestPhoto.suffix}`} alt={`${venueDetails.name}`}/>
                  <p>{venueDetails.name}</p>
                  <p>{venueDetails.location.crossStreet}</p>
                  <p>
                    {venueDetails.location.formattedAddress[0]}
                    <br />
                    {venueDetails.location.formattedAddress[1]}
                  </p>
                </React.Fragment>
             </InfoWindow>
        )}
        </Marker>
      );
      })}
  </GoogleMap>
))
);

class Map extends Component {

  render() {
    return (
      <ErrorBoundary {...this.props}>
        <MyMapComponent
          {...this.props}
          google={this.props.google}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAnQSKmjct8nxaLa3IYSUlP8TOtLfnQ6TE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%`,width:`75%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </ErrorBoundary>
    );

}
}

export default Map;
