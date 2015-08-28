import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Home from '../components/Home';
import {renderDevTools} from '../utils/devTools';
// MATERIAL UI STUFF ------------------------
import mui from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();

import injectTapEventPlugin from 'react-tap-event-plugin'
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
// -------------------------------------------

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>

        {/* <Home /> is your app entry point */}
        <Provider store={store}>
          {() => <Home /> }
        </Provider>

      </div>
    );
  }
  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
};
        // DEVTOOLS
        // { only renders when running in DEV mode 
        //   renderDevTools(store)
        // }

// MORE MATERIAL UI STUFF ---------------------------------
// Important!
App.childContextTypes = {
  muiTheme: React.PropTypes.object
};
//--------------------------------------------------------


module.exports = App;