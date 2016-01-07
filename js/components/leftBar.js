import React, {Component} from 'react'
import ProgressBar from "./progressBar"
import mui from 'material-ui'
let Paper = mui.Paper

const divStyle = {
	display: 'inline-block',
	position: 'fixed',
	height: '100%',
	width: '15%',
	marginTop: -20,
}

export default class LeftBar extends Component {
	render() {
		const {gameState} = this.props;
		return (
		  <Paper zDepth={4} id='leftBar' style={divStyle} >
		    <ProgressBar gameState={gameState} />   
		  </Paper>
		)
	}
}