import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';


class TickBox extends Component {	
	render() {
    const {gameState, id, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);

		var divStyle = {
			position: 'absolute',
			width: '20',
			height: '20',
			backgroundColor: 'green'
		}
		return (
			<div 
				style={divStyle} 
				onClick={e => actions.toggleChallengeState(id)}>
			</div>
		)
	}
}

export default connect(state => state.Challenge)(TickBox)
