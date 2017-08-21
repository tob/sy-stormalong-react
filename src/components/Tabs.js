import React, { PureComponent } from 'react'
import IconPeople from 'material-ui/svg-icons/social/people';
import IconDirectionsBoat from 'material-ui/svg-icons/maps/directions-boat';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

export default class BottomTabs extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {
        slideIndex: 2,
      };
    }

    handleChange = (value) => {
      this.setState({
        slideIndex: value,
      });
    };

    render() {

      if (!this.props.articles) return null
      return (
        <div>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab icon={<IconPeople />} label={this.props.tab1.props.article.title} value={0} />
            <Tab icon={<IconDirectionsBoat />} label={this.props.tab2.props.article.title} value={1} />
            <Tab icon={<IconLocationOn />} label="Map" value={2} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div>
              {this.props.tab1}
            </div>
            <div>
              {this.props.tab2}
            </div>
            <div>
              {this.props.tab3}
            </div>
          </SwipeableViews>
        </div>
      );
    }
}
