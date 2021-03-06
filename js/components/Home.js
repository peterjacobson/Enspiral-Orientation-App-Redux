import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import YAML from 'yamljs'
import * as HomeActions from '../actions/HomeActions';

import styles from '../../css/app.css';
import Content from './content';
import Leftbar from './leftBar';

import mui from 'material-ui';
let LeftNav = mui.LeftNav;

const sections = YAML.load("/gameData.yaml").sections
  .filter((section) => {return !section.title.match(/Archived/)} )



class Home extends Component {
  render() {
    const {title, dispatch, ...gameState} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    const mainStyle = {
      display: 'inline-flex'
    } 

    return (
      <main style={mainStyle}>
        <Leftbar gameState={gameState} /> 
        <Content sections={sections} gameState={gameState}/>
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
export default connect(state => state.Challenge)(Home)
