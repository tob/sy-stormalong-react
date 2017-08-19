import React, { PureComponent } from 'react'
import {Card,} from 'material-ui/Card';

class Map extends PureComponent {

  render() {

    return (

      <Card>
        <iframe title='main-map' src="https://www.google.com/maps/d/u/2/embed?mid=15GH1TZoGMDVAMyHgr3TaBzfMiUA" width="100%" height="600" border="0"></iframe>
      </Card>


    )
  }
}

export default Map
