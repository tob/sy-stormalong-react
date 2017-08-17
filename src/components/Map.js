import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

var Map = React.createClass({

  render() {

    return (

      <Card>
      <h1>mp</h1>
        { <div>
           <script type="text/javascript">
            width='400';	// the width of the embedded map in pixels or percentage
            height='450';	// the height of the embedded map in pixels or percentage
            border='1';	// the width of the border around the map (zero means no border)
            shownames='false';	// to display ship names on the map (true or false)
            latitude='37.4460';	// the latitude of the center of the map, in decimal degrees
            longitude='24.9467';	// the longitude of the center of the map, in decimal degrees
            zoom='9';	// the zoom level of the map (values between 2 and 17)
            maptype='1';	// use 0 for Normal Map, 1 for Satellite, 2 for OpenStreetMap
            trackvessel='0';	// MMSI of a vessel (note: vessel will be displayed only if within range of the system) - overrides "zoom" option
            fleet='';	// the registered email address of a user-defined fleet (user's default fleet is used)
        </script> <script type="text/javascript" src="//www.marinetraffic.com/js/embed.js"></script> </div>}

      </Card>


    )
  }
});

export default Map
