import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html';
import { Flex, Box } from 'reflexbox'
import Gallery from './Gallery'
import {GridList} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
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


var ReactDisqusThread = require('react-disqus-thread')

export class ArticlePage extends PureComponent {

  static PropTypes ={
    fetchArticles: PropTypes.func.isRequired
  }

  componentWillMount(){
    // this.props.fetchArticles()
    console.log(this.props)
  }


  render() {

    const { id, title, body, photos } = this.props
    if (!id) return null


    return(
        <div>
          <h2>{title}</h2>
          {renderHTML(body)}

          <div style={styles.root}>
          <Flex
            wrap
            w={1}
            style={{ height: '100%' }}
            justify='space-around'
            align='center' >
              <Box w={[ 1, 1/2, 1/2]} p={2}
              m={1} >

                <Gallery images={photos} />



              </Box>
              <Box w={[ 1, 1/2, 1/2]} >
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


export default connect(mapStateToProps)(ArticlePage)
