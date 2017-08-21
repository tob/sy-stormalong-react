import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import { replace } from 'react-router-redux'
import store, { history } from '../store'


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
     var photo = this.props.article.photos.length < 1 ? "http://lorempixel.com/400/400/nature/" : this.props.article.photos[0].src

      return (

            <Card onTouchTap={() => { history.push('/articles/'+id) }}>
              <CardMedia
                overlay={<CardTitle title={title} subtitle={date} />}
                >
                <img src={photo} alt="" className="cardImageBg"/>
              </CardMedia>
            </Card>
        )
      }
    }

export default Article
