import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {GridTile} from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconButton from 'material-ui/IconButton';

export class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {featured: this.props.photo.featured};

  }

  handleToggle = () => this.setState({featured: !this.state.featured});



  render() {
debugger
    return (
        <GridTile
          key={this.props.photo.id}
          cols={this.props.photo.featured ? 2 : 1}
          rows={this.props.photo.featured ? 2 : 1}
          title={this.props.photo.title}
          onTouchTap={this.handleToggle}
          subtitle={<span>by <b>TEST</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}

        >
          <img src={this.props.photo.image.url} alt={this.props.photo.image.description} />
        </GridTile>
  )}
}

export default Image
