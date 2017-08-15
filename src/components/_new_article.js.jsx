var NewArticle= React.createClass({
  handleClick() {
    var title = this.refs.title.value;
    var body = this.refs.body.value;
      $.ajax({
        url: '/articles.json',
        type: 'POST',
        data: { article: { title: title, body: body } },
        success: (success) => {
          this.props.handleSubmit();
        }
      });
    },

  render() {
   return (
    <div>
      <input ref='title' placeholder='Enter the title of the article' />
      <input ref='body' placeholder='Enter a dead body' />
      <button onClick={this.handleClick}>Submit</button>

    </div>
    )
  }
});
