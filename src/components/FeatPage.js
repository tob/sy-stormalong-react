import React, { PureComponent } from 'react'
import renderHTML from 'react-render-html';
import Gallery from './_gallery'

export class FeatPage extends PureComponent {

  componentWillMount(){
    // this.props.fetchArticles()
  }

  // readMore() {
  //   history.push('/articles/'+{id})
  // }

  render() {
    const { id, title, body, photos } = this.props.article
    if (!id) return null

    return(
      <div>
        <p>{title}</p>
        {renderHTML(body)}
        <div>
          <Gallery images={photos} />
        </div>
      </div>
     )
  }
}


// const mapStateToProps = ({ articles }) => {
//
//   const aboutUs = "About us"
//
//   const article = articles.reduce((prev, next) => {
//     if (next.title === aboutUs) {
//       return next
//     }
//     return prev
//   }, {})
//
//   return {
//     ...article
//   }
// }

export default FeatPage
