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
  }


  render() {
    const { id, title, body } = this.props
    if (!id) return null

    return(
        <div>
          <p>{title}</p>
          <p>{renderHTML(body)}</p>
          <div>
            {this.props.photos.map((photo) => {
              return (
                <div className='images' key={photo.id}>
                  <img src={photo.image.url} alt={photo.image.description} />
                </div>
                )
            })}
          </div>
        </div>
       )
      }
}



const mapStateToProps = ({ articles }) => {
  const article = articles.reduce((prev, next) => {
    if (next.title === "About us") {
      return next
    }
    return prev
  }, {})

  return {
    ...article
  }
}

export default connect(mapStateToProps, { fetchArticles })(ArticlePage)
