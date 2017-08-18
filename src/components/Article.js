import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
// import { Link } from 'react-router'
import { history } from '../store'

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
  static PropTypes = {
    mediaStyle: PropTypes.object.isRequired
  }

  goToArtPage(id) {
    history.push( `/articles/${id}` )
  }

   render() {
     var title = this.props.article.title;
     var date = this.props.article.date;
     const id = this.props.article.id;
     var photo = this.props.article.photos.length < 2 ? "http://lorempixel.com/400/400/nature/" : this.props.article.photos[0].image.url

      return (

            <Card>
              <CardMedia
                overlay={<CardTitle title={title} subtitle={date} mediaStyle="height:300px, overflow:hidden;"/>}
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
                 <FlatButton href={"articles/"+ id} label="Read More" />
              </CardActions>
            </Card>
        )
      }
    }

export default Article
