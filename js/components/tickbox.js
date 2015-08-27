import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';


class TickBox extends Component {	
	render() {
    const {checked, id, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    console.log(checked);
		var divStyle = {
			position: 'absolute',
			width: '20',
			height: '20',
			backgroundColor: checked ? 'green' : 'yellow',
		}
		console.log(checked);

		return (
			<div 
				style={divStyle} 
				onClick={e => actions.toggleChallengeState(id)}>
				<p>{checked}</p>
			</div>
		)
	}
}

// TickBox.propTypes = {
// 	// gameState: PropTypes.object.isRequired
// }

export default connect(state => state.Challenge)(TickBox)
