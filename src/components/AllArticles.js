import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Article from './Article'
import fetchArticles from '../actions/fetch'

class AllArticles extends PureComponent {
  static propTypes = {
    fetchArticles: PropTypes.func.isRequired
  }

  // handleDelete(id) {
  //   this.props.handleDelete(id);
  // }
  //
  // onUpdate(article) {
  //   this.props.onUpdate(article);
  // }
  // In render:
  // <Article article={article} handleDelete={this.handleDelete.bind(this, article.id)} handleUpdate={this.onUpdate}/> </div>

  componentWillMount() {
    this.props.fetchArticles()
  }

  componentWillMount() {
    this.props.fetchArticles()
  }

  render() {
     var articles= this.props.articles.map((article) => {
        return (
           <div key={article.id}>
          <Article article={article} /> </div>
        )
      })

     return(
       <div>
        {articles}
       </div>
     )
    }
}


const mapStateToProps = ({ articles }) => ({
  articles
})

export default connect(mapStateToProps, { fetchArticles })(AllArticles)
