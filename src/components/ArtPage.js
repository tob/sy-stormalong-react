import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html';
import fetchArticles from '../actions/fetch'

export class ArticlePage extends PureComponent {

  static PropTypes ={
    fetchArticles: PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.fetchArticles()
    console.log(this.props)
  }


  render() {

    const { id, title, body, photos } = this.props
    if (!id) return null

    return(
        <div>
          <h2>{title}</h2>
          {renderHTML(body)}
          <div>
            {this.props.photos.map((photo) => {
              return (
                <div className='images' key={photo.id}>
                  <img alt={ photo.description } src={photo.image.url} />
                </div>
                )
            })}
          </div>
        </div>
       )
      }
}

const mapStateToProps = ({ articles },{ params }) => {
  console.log(params);

  const article = articles.reduce((prev, next) => {
    debugger
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
