import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'flex',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 'flex',
    height: 'flex',
    overflowY: 'auto',
  },
};

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
       <div  style={styles.root}>
             <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>December</Subheader>
          {articles.map((articles) => (
            <GridTile
              key={articles.img}
              title={articles.title}
              subtitle={<span>by <b>{articles.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={articles.img} />
            </GridTile>
          ))}
          {articles}

        </GridList>
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
