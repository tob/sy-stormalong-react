import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import store, { history } from '../store'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconPeople from 'material-ui/svg-icons/social/people';
import IconDirectionsBoat from 'material-ui/svg-icons/maps/directions-boat';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconDashboard from 'material-ui/svg-icons/action/dashboard';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import MapContainer from './mapcontainer'


const styles = {
  headline: {
    fontSize: 24,
    fontWeight: 400,
  },
};


export default class BottomTabs extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {
        slideIndex: 0,
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
            <Tab icon={<IconDashboard />} label="Logboek" value={0} />
            <Tab icon={<IconPeople />} label={this.props.tab2.props.article.title} value={1} />
            <Tab icon={<IconDirectionsBoat />} label={this.props.tab3.props.article.title} value={2} />

            <Tab icon={<IconLocationOn />} label="Kaart" value={3} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div id="test">
              {this.props.tab1}
            </div>
            <div>
              {this.props.tab2}
            </div>
            <div>
              {this.props.tab3}
            </div>
            <div>
              {this.props.tab4}
            </div>
          </SwipeableViews>
        </div>
      );
    }
}
