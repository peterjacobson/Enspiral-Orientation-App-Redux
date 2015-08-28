import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
// import FontAwesome from 'react-fontawesome';
var FontAwesome = require('react-fontawesome');

class TickBox extends Component {	
	render() {
    const {checked, id, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
		const divStyle = {
			position: 'absolute',
			display: 'inline-block',
			width: '30',
			height: '30',
			// backgroundColor: checked ? 'green' : 'yellow',
		}
		let icon = checked ? 'check-square-o' : 'square-o';
		console.log(checked);
		console.log(icon);

		return (
			<FontAwesome
        className=''
        name={icon}
        size='2x'
        style={divStyle} 
        onClick={e => actions.toggleChallengeState(id)} />
		)
	}
}

// TickBox.propTypes = {
// 	// gameState: PropTypes.object.isRequired
// }

export default connect(state => state.Challenge)(TickBox)
