import React, { PureComponent } from 'react'
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

export class Gallery extends PureComponent {

  handleToggle(photo) {
    // console.log('inside handletoggle', photo.featured, photo);
    photo.featured = !photo.featured
    this.forceUpdate()
  };


render() {
  return (
    <div>

    <GridList
      cellHeight={200}
      style={styles.gridList}  >
      {this.props.images.map((photo) => (

        <GridTile
          key={photo.id}
          cols={photo.featured ? 2 : 1}
          rows={photo.featured ? 2 : 1}
          title={photo.title}
          onTouchTap={this.handleToggle.bind(this, photo)}
          subtitle={<span>by <b>TEST</b></span>}
        >
          <img src={photo.src} alt={photo.image.description} />
        </GridTile>

      ))}
    </GridList>
    </div>
  )}
}

export default Gallery