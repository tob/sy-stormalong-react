var Body = React.createClass({
  getInitialState() {
    return { articles: [] }
  },

  componentDidMount() {
    this.loadAllArticles()
  },

  loadAllArticles() {
    $.getJSON('/articles.json', (response) => { this.setState({ articles: response }) });
  },

  handleDelete(id) {
    $.ajax({
      url: `/articles/${id}`,
      type: 'DELETE',
      success:() => { this.removeArticleClient(id);}
    });
  },

  removeArticleClient(id) {
     var newArticles = this.state.articles.filter((article) => {
        return article.id != id;
      });

      this.setState({ articles: newArticles });
  },

  handleSubmit() {
    this.loadAllArticles()
   },

   handleUpdate(article) {
      $.ajax({
        url: `/articles/${article.id}`,
        type: 'PUT', data: { article: article },
        success: () => {
                this.updateArticles(article);
            }
      }
    )
   },

 updateArticles(article) {
   var articles = this.state.articles.filter((i) => {
      return i.id != article.id
    });

    articles.push(article);
    this.setState({articles: articles });
 },

 render() {
  return (
   <div>
   <NewArticle handleSubmit={this.handleSubmit}/>
   <AllArticles articles={this.state.articles} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>

  </div>
   )
  }
});
