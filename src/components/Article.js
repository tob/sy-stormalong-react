import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import { history } from '../store'

const PLACEHOLDER = "http://res-3.cloudinary.com/lorenzocloudinary/image/upload/v1503154951/xfi47gmmraieh7tlrszj.jpg"

class Article extends PureComponent {
  static PropTypes = {
    mediaStyle: PropTypes.object.isRequired
  }

   render() {
     const { title, date, id } = this.props.article
     const photo = this.props.article.photos.length < 1
        ? PLACEHOLDER
        : this.props.article.photos[0].src

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
