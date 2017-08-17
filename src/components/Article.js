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
    });


export default Article
