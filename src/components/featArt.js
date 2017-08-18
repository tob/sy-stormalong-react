import React, { PureComponent } from 'react'
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Details from 'material-ui/svg-icons/image/details';


class FeatArt extends PureComponent {

   render() {

     const { id, title, date, body} = this.props.article
    //  var id = this.props.article.id;
    //  var title = this.props.article.title;
    //  var date = this.props.article.date;
    //  var body = this.props.article.body;
     var photo = this.props.article.photos.length < 1 ? "http://lorempixel.com/400/400/nature/" : this.props.article.photos[0].image.url

     if (!body) return null

      return (

            <Card>
              <CardMedia
                overlay={<CardTitle title={<RaisedButton primary={true} icon={<Details />} label={title} href={"articles/"+ id}/>} />}
                >
                <img src={photo} alt="" className="featHomeImage"/>
              </CardMedia>


            </Card>
        )
      }
    }


export default FeatArt
