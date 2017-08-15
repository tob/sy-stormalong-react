import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


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
        <div>
          <Card>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="http://lorempixel.com/400/200/sports/"
            />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="http://lorempixel.com/400/200/" alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>

           <a href={`articles/${this.props.article.id}`}>{title}</a>
         {body}
          <button onClick={this.props.handleDelete}>Delete</button>
          <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' } </button>
          </div>
        )
      }
    });


export default Article
