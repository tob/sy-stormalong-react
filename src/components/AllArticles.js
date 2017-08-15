import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'


var AllArticles = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(article) {
    this.props.onUpdate(article);
  },


  render() {
     var articles= this.props.articles.map((article) => {
        return (
           <div key={article.id}>
          <Article article={article} handleDelete={this.handleDelete.bind(this, article.id)} handleUpdate={this.onUpdate}/> </div>
        )
      });

     return(
       <div>
        {articles}
       </div>
     )
    }
});

// const mapStateToProps = (articles) => {
//   return {
//     articles: articles.articles
//   }
// }


export default AllArticles
