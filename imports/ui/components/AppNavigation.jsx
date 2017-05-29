//Libraries and modules
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

//Material-Ui
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

//Icons, Fonts & css
import HomeIcon from 'material-ui/svg-icons/action/home';

//inline styles
const styles = {

}

export default class AppNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(){
    this.setState({open: !this.state.open});
  }
  handleClose(){
    this.setState({open: false});
  }


  render() {
    return(
      <div>
        <AppBar
          title="Webapp1"
          onClick={this.handleToggle}
        />
        <Drawer
          className="center-align"
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >

          <Link to="/" onClick={this.handleClose}>
            <IconButton
              className="center-align"
              iconStyle={styles.menuIcon}
              style={styles.menuIconButton}
            >
              <HomeIcon />
            </IconButton>
            <h4 className="center-align" style={styles.menuText}>Home</h4>
          </Link>


        </Drawer>
      </div>




    );
  }
}
