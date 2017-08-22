import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const PLACEHOLDER = "http://res-3.cloudinary.com/lorenzocloudinary/image/upload/v1503154951/xfi47gmmraieh7tlrszj.jpg"

class FeatArt extends PureComponent {
  static PropTypes = {
    mediaStyle: PropTypes.object.isRequired
  }

   render() {
     const { title, id, photos } = this.props.article
     if (!id) return null
     const photo = photos.length < 1
        ? PLACEHOLDER
        : photos[0].src

      return (

            <Card>
              <CardMedia
                overlay={<CardTitle title={<div id='main-title'>{title}</div>} />}
                >
                <img src={photo} alt="" className="hero"/>
              </CardMedia>
            </Card>
        )
      }
    }

export default FeatArt
