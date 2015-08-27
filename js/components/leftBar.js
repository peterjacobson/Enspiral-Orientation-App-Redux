import React, {Component} from 'react';
import gameData from "../../gameData"
import ProgressBar from "./progressBar"

const divStyle = {
	position: 'absolute',
	width: '100%',
}

export default class LeftBar extends Component {
	render() {
		const {gameState} = this.props;
		return (
      <ProgressBar gameState={gameState} /> 
		)
	}
}