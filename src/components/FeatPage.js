import React, { PureComponent } from 'react'
import renderHTML from 'react-render-html';
import Gallery from './_gallery'
import { Flex, Box } from 'reflexbox'

export class FeatPage extends PureComponent {

  componentWillMount(){
    // this.props.fetchArticles()
  }

  // readMore() {
  //   history.push('/articles/'+{id})
  // }

  render() {
    const { id, title, body, photos } = this.props
    if (!id) return null

    return(
      <div>
        <Flex
          wrap
          w={1}
          style={{ height: '100%' }}
          justify='space-around'
          align='center' >
            <Box w={1} p={2}
            m={1} >
              <h3>{title}</h3>
              {renderHTML(body)}
            </Box>
            <Box w={1} >
              <Gallery images={photos} />
          </Box>
        </Flex>
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
