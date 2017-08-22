import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import Paper from 'material-ui/Paper'


export default class Footer extends PureComponent {
 render() {
  return (

<div>
            <CardHeader
              title="Marine Traffic Map"
              subtitle="Subtitle"
              avatar="http://www.material-ui.com/images/grid-list/burger-827309_640.jpg"
              onTouchTap=""
            />



      <p>
        <Link target="_blank" to='https://www.marinetraffic.com/en/ais/details/ships/shipid:4199684/mmsi:244670249/vessel:STORMALONG'>
        MarineTraffic Map
        </Link>
      </p></div>
    )
  }
}
