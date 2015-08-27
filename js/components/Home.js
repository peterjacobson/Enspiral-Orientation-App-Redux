import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import Content from './content';
import Leftbar from './leftBar';
import sections from '../../gameData';

class Home extends Component {
  render() {
    const {title, dispatch, ...gameState} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main>
        <Leftbar /> 
        <Content sections={sections} gameState={gameState}/>
        <h1 className={styles.text}>Welcome {title}!</h1>
        <button onClick={e => actions.changeTitle(prompt())}>
          Update Title
        </button>
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
export default connect(state => state.Challenge)(Home)
