import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Events from './components/events'
import {Provider} from 'react-redux'
import {store} from './redux/store/eventStore'

const styles = {
  body:{
    flexGrow: 1,
    background: '#202e44'
  },
  appbar:{
     color: '#481151'
  }
}

class App extends Component {
  
  render() {
    console.log('in app')
    return (
      <Provider store = {store}>
      <div style ={styles.body} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            To-do's manager 
          </Typography>
        </Toolbar>
      </AppBar>
      <Events />
    </div>
    </Provider>
    );
  }
}

export default (App);


