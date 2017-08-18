import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {GridList, GridTile} from 'material-ui/GridList';
import Image from './_image'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  image:{
    height: '120px'
  }
};

export class Gallery extends PureComponent {

render() {
  return (
    <div>

    <GridList
      cellHeight={200}
      style={styles.gridList}  >
      {this.props.images.map((photo) => (

        <Image photo={photo} />

      ))}
    </GridList>
    </div>
  )}
}

export default Gallery
