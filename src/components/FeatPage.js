import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html';

export class FeatPage extends PureComponent {

  static PropTypes ={
    fetchArticles: PropTypes.func.isRequired
  }

  componentWillMount(){
    const { artTitle } = this.props
    console.log(artTitle)
  }

  render() {
    debugger
    const featArticle = this.props.articles.reduce((prev, next) => {
      if (next.id === this.props.artTitle) { return next }
      return prev }, {})

    // if (!id) return null

    return(
        <div>
          <p>{featArticle.title}</p>
          <p>{renderHTML(featArticle.body)}</p>
          <div>
            {featArticle.photos.map((photo) => {
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


export default FeatPage
