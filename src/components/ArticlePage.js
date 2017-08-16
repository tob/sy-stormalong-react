import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'


var $ = require('jQuery');

var ArticlePage = React.createClass({

  handleDelete(id) {
    $.ajax({
      url: `/articles/${id}`,
      type: 'DELETE',
      success:() => {
        window.location.replace('/') }
    });
  },

  onUpdate(article) {
    this.props.onUpdate(article);
  },

  render() {
    var { id, title, body } = this.props.article
    return(
      <div>
        <p>{title}</p>
        <p>{body}</p>
        <div>
          {this.props.photos.map((photo) => {
            return (
              <div className='images' key={photo.id}>
                <img src={photo.image.url} />
              </div>
              )
          })}
        </div>
        <button onClick={this.handleDelete.bind(this, id)}>Delete</button>
      </div>
     )
    }
});

export default ArticlePage
