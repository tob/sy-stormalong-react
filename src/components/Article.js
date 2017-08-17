import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import { Box } from 'reflexbox'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  image:{
    height: '120px'
  }
};

class Article extends PureComponent {
  getInitialState() {
     return {editable: false}
  }

   render() {
     console.log(this.props)
     var { title, body } = this.props.article

     var photo = this.props.article.photos.length < 2 ? "http://lorempixel.com/400/400/sports/" : this.props.article.photos[0].image.url


     var featImage = this.props.article.photos.map((photo) => {
       return (
         <div key={photo.id}>
          <img src={photo.image.url} alt=""/>
         </div>
       )
     })



     //  var photos = this.props.article.photos.map((photo) => {
     //     return (
     //       <div key={photo.id}>
     //         <img src={photo.image.url} />
     //       </div>
     //     )
     //   });

      return (

            <Card>
              <CardMedia
                overlay={<CardTitle title={title} subtitle={body} mediaStyle="height:300px, overflow:hidden;"/>}
                >
                <img src={photo} alt="" className="cardImageBg"/>
              </CardMedia>
              <CardText>
                 <div style={styles.root}>
                   <GridList style={styles.gridList} cols={2.2}>
                     {this.props.article.photos.map((photo) => (
                       <GridTile
                         key={photo.id}
                         title={photo.title}
                         titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                       >
                         <img src={photo.image.url} alt={photo.image.description} />
                       </GridTile>
                     ))}
                   </GridList>
                 </div>
              </CardText>
              <CardActions>
                 <FlatButton label="Read More" />
              </CardActions>
            </Card>
        )
      }
}


export default Article
