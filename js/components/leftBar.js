import React, {Component} from 'react';
import gameData from "../../gameData"
import ProgressBar from "./progressBar"

const divStyle = {
	display: 'inline-block',
	position: 'fixed',
	height: '100%',
	width: '7%',
}

export default class LeftBar extends Component {
	render() {
		const {gameState} = this.props;
		return (
		  <div id='leftBar' style={divStyle} >
		    <ProgressBar gameState={gameState} />   
		  </div>
		)
	}
}