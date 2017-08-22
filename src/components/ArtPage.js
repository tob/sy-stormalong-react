import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html'
import { Flex, Box } from 'reflexbox'
import Gallery from './Gallery'
import {GridList} from 'material-ui/GridList'
import { Helmet } from 'react-helmet'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridList: {
    display: 'flex',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  image:{
    height: '120px'
  }
};

const PLACEHOLDER = {
  image: {
    image: {
      url: "http://res-3.cloudinary.com/lorenzocloudinary/image/upload/v1503154951/xfi47gmmraieh7tlrszj.jpg",
    }
  },
  src: "http://res-3.cloudinary.com/lorenzocloudinary/image/upload/v1503154951/xfi47gmmraieh7tlrszj.jpg",
  description: "A beautiful view!",
  featured: true,
}

var ReactDisqusThread = require('react-disqus-thread')

export class ArticlePage extends PureComponent {

  static PropTypes ={
    fetchArticles: PropTypes.func.isRequired
  }

  componentWillMount(){
    // this.props.fetchArticles()
  }

  render() {
    const { id, title, body, date } = this.props
    if (!id) return null

    const photos = this.props.photos.length < 1 ? [PLACEHOLDER] : this.props.photos

    return(
        <div>
          <Helmet>
            <title>{title} | Sy-Stormalong</title>
          </Helmet>
          <div style={styles.root}>
          <Flex
            wrap
            w={1}
            style={{ height: '100%' }}
            justify='center'
            align='left'
            pt={3} >
              <Box w={[ 1, 1/2, 1/2]}>
                <Gallery images={photos} />
              </Box>
              <Box w={[ 1, 1/2, 1/3]} px={3}>

                <h2>{title}</h2>
                <p>{date}</p>
                {renderHTML(body)}

              </Box>
              <Box w={[ 1, 1/2]} py={3} >
                <GridList
                  cols={1}
                  cellHeight='auto'
                  padding={30}
                  style={styles.gridList}  >

                <ReactDisqusThread
                     shortname="stormalong-1"
                     identifier=""
                     title={title}
                     url={'https://sy-stormalong.herokuapp.com/articles/'+ id }
                     category_id=""
                     onNewComment={this.handleNewComment}/>
                  </GridList>
              </Box>
            </Flex>
          </div>
        </div>
       )
      }
}

const mapStateToProps = ({ articles },{ params }) => {
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


export default connect(mapStateToProps)(ArticlePage)
