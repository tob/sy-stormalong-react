import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchArticles from '../actions/fetch'

class ArticlePage extends PureComponent {

  static PropTypes ={
    fetchArticles: PropTypes.func.isRequired
  }

  componentWillMount(){
    const { id, fetchArticles } = this.props
    if (!id) fetchArticles()
  }

  render() {
    console.log('Render', this.props)

    var CommentBox = require('comment-box').CommentBox


    const { id, title, body, photos } = this.props
    if (!id) return null

    return(
        <div>
          <p>{title}</p>
          <p>{body}</p>
          <p>{CommentBox}</p>

          <div>
            {photos.map((photo) => {
              return (
                <div className='images' key={photo.id}>
                  <img alt='alt-text' src={photo.image.url} />
                </div>
                )
            })}
          </div>
        </div>
       )
      }
}

const mapStateToProps = ({ articles },{ params }) => {
  const article = articles.reduce((prev, next) => {
    if (next.id === params.articleId) {
      return next
    }
    return prev
  }, {})

  debugger
  return {
    ...article
  }
}

export default connect(mapStateToProps, { fetchArticles })(ArticlePage)
