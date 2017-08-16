import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
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


const mapStateToProps = ({ articles }) => ({
  articles
})

export default connect(mapStateToProps)(AllArticles)
