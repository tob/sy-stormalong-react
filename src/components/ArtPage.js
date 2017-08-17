import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchArticles from '../actions/fetch'

export class ArticlePage extends PureComponent {

  static PropTypes ={
    fetchArticles: PropTypes.func.isRequired
  }
  // onUpdate(article) {
  //   this.props.onUpdate(article);
  // }

  componentWillMount(){
    this.props.fetchArticles()
    console.log(this.props)
  }


  render() {

    var CommentBox = require('comment-box').CommentBox;

    const { id, title, body, photos } = this.props
    if (!id) return null

    return(
        <div>
          <p>{title}</p>
          <p>{body}</p>
          <div>
            {this.props.photos.map((photo) => {
              return (
                <div className='images' key={photo.id}>
                  <img src={photo.image.url} />
                </div>
                )
            })}
          </div>
        </div>
       )
      }
}

const mapStateToProps = ({ articles },{ params }) => {
  debugger;
  console.log(params);

  const article = articles.reduce((prev, next) => {
    if (next.id === parseInt(params.articleId,10)) {
      return next
    }
    return prev
  }, {})

  return {
    ...article
  }
}

export default connect(mapStateToProps, { fetchArticles })(ArticlePage)
