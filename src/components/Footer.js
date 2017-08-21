import React, { PureComponent } from 'react'
import { Link } from 'react-router'

export default class Footer extends PureComponent {
 render() {
  return (
      <div><p>
        <Link target="_blank" to='https://www.marinetraffic.com/en/ais/details/ships/shipid:4199684/mmsi:244670249/vessel:STORMALONG'>
        MarineTraffic Map
        </Link>
      </p></div>
    )
  }
}
