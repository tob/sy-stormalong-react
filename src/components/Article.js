import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';

const style = {
  height: 100,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Article extends PureComponent {
  getInitialState() {
     return {editable: false}
  }

   render() {
     console.log(this.props)
     var { title, body } = this.props.article

     //  var photos = this.props.article.photos.map((photo) => {
     //     return (
     //       <div key={photo.id}>
     //         <img src={photo.image.url} />
     //       </div>
     //     )
     //   });

      return (
        <Card>
          <CardHeader
            title={title}
            subtitle=" CardHeader Subtitle"
            avatar="http://lorempixel.com/128/128/animals/"/>
          <CardMedia
            overlay={<CardTitle title={title} subtitle="Overlay sub " />}
            >
            <img src="http://lorempixel.com/600/400/nature/" alt="" />
          </CardMedia>
          <CardText>
            Lorem {body}
          </CardText>
          <CardActions>
             <FlatButton label="Read More" />
          </CardActions>
        </Card>
        )
      }
}


export default Article
