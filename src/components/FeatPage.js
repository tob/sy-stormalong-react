import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html';
import fetchArticles from '../actions/fetch'
import Gallery from './_gallery'

export class ArticlePage extends PureComponent {

  static PropTypes ={
    fetchArticles: PropTypes.func.isRequired
    // id: PropTypes

  }


  componentWillMount(){
    // this.props.fetchArticles()
  }

  // readMore() {
  //   history.push('/articles/'+{id})
  // }

  render() {
    const { id, title, body } = this.props
    if (!id) return null

    return(
      <div>
        <p>{title}</p>
        <p>{renderHTML(body)}</p>
        <div>
          <Gallery images={this.props.photos} />


        </div>
      </div>
     )
  }
}


const mapStateToProps = ({ articles }) => {

  const aboutUs = "About us"

  const article = articles.reduce((prev, next) => {
    if (next.title === aboutUs) {
      return next
    }
    return prev
  }, {})

  return {
    ...article
  }
}

export default connect(mapStateToProps, { fetchArticles })(ArticlePage)
