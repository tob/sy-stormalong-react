import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

import { replace } from 'react-router-redux'

// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     display: 'flex',
//     flexWrap: 'nowrap',
//     overflowX: 'auto',
//   },
//   titleStyle: {
//     color: 'rgb(0, 188, 212)',
//   },
//   image:{
//     height: '120px'
//   }
// };

class Article extends PureComponent {
  static PropTypes = {
    mediaStyle: PropTypes.object.isRequired
  }

  goToArtPage(id) {
    replace( `/articles/${id}` )
  }

   render() {
     var title = this.props.article.title;
     var date = this.props.article.date;
     const id = this.props.article.id;
     var photo = this.props.article.photos.length < 1 ? "http://lorempixel.com/400/400/nature/" : this.props.article.photos[0].image.url

      return (

            <Card>
              <CardMedia
                overlay={<CardTitle title={title} subtitle={date} mediaStyle="height:300px, overflow:hidden;"/>}
                >
                <img src={photo} alt="" className="cardImageBg"/>
              </CardMedia>
              <CardActions>
                 <FlatButton
                 label={<Link to={'/articles/'+id}>Read more</Link>} />
              </CardActions>
            </Card>
        )
      }
    }

export default Article
