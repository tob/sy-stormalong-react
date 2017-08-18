import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {GridList, GridTile} from 'material-ui/GridList';


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

// this.state
//
// cellHeight =



export class Gallery extends PureComponent {

render() {
  return (
    <GridList
      cellHeight={200}
      style={styles.gridList}  >
      {this.props.images.map((photo) => (
        <GridTile
          key={photo.id}
          cols={photo.featured ? 2 : 1}
          rows={photo.featured ? 2 : 1}
          title={photo.title}
          overlay={photo.featured ? photo.image.description : null}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={photo.image.url} alt={photo.image.description} />
        </GridTile>
      ))}
    </GridList>
  )}
}

export default Gallery
