import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html';
import fetchArticles from '../actions/fetch'
import { Flex, Box } from 'reflexbox'

import {GridList, GridTile} from 'material-ui/GridList';

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

          <div style={styles.root}>
          <Flex
            wrap
            w={1}
            style={{ height: '100%' }}
            justify='space-around'
            align='center' >
              <Box w={[ 1, 1/2, 1/2]} p={2}
              m={1} >
                <GridList
                  cellHeight={200}
                  style={styles.gridList}  >
                  {this.props.photos.map((photo) => (
                    <GridTile
                      key={photo.id}
                      cols={photo.featured ? 2 : 1}
                      rows={photo.featured ? 2 : 1}
                      title={photo.title}
                      titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >
                      <img src={photo.image.url} alt={photo.image.description} />
                    </GridTile>
                  ))}
                </GridList>
              </Box>
              <Box w={[ 1, 1/2, 1/2]} >
                <GridList
                  cols={1}
                  cellHeight='auto'
                  padding={30}
                  style={styles.gridList}  >

                <ReactDisqusThread
                     shortname="stormalong-1"
                     identifier={id}
                     title={title}
                     url="http://localhost:3001"
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


export default connect(mapStateToProps, { fetchArticles })(ArticlePage)
