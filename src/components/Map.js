import React, { PureComponent } from 'react'
import {Card,} from 'material-ui/Card';

class Map extends PureComponent {

  render() {

    return (

      <Card>
      <iframe title="map" src="https://www.google.com/maps/d/u/0/embed?mid=1B1SUCj7Tj7Vi73aRkDM17x8vfR4" width="100%" height="480"></iframe>
      </Card>


    )
  }
}

export default Map
