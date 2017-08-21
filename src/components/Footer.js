import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import store, { history } from '../store'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconPeople from 'material-ui/svg-icons/social/people';
import IconDirectionsBoat from 'material-ui/svg-icons/maps/directions-boat';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';



export default class Footer extends PureComponent {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

 render() {
  return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="About Us"
            icon={<IconPeople />}
            onClick={() => this.select(0)} />
          <BottomNavigationItem
            label="The Ship"
            icon={<IconDirectionsBoat />}
            onClick={() => this.select(1)}/>
          <BottomNavigationItem
            label="Current Location"
            icon={<IconLocationOn />}
            onClick={() => { history.push('/articles/21') }}/>
        </BottomNavigation>
      </Paper>

    )
  }
}
