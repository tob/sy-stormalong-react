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

var Article = React.createClass({
  getInitialState() {
     return {editable: false}
  },

  handleEdit() {
    if(this.state.editable) {
      var title = this.refs.title.value;
      var id = this.props.article.id;
      var body = this.refs.body.value;
      var article = {id: id , title: title , body: body}; this.props.handleUpdate(article);
      console.log('in handleEdit', this.state.editable, title, body);
    }

    this.setState({ editable: !this.state.editable })

   },

   render() {
     var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.article.title} /> : <h3>{this.props.article.title}</h3>;
     var body = this.state.editable ? <input type='text' ref='body' defaultValue={this.props.article.body} />: <p>{this.props.article.body}</p>;

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
            <img src="https://thumb.ibb.co/bOr3ba/IMG_1009.jpg" alt="" />
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
    });


export default Article
