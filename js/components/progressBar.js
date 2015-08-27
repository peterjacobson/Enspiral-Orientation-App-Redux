import React, {Component} from 'react';

import gameData from "../../gameData"

const divStyle = {
	position: 'absolute',
	width: '100%',
}

export default class ProgressBar extends Component {
	render() {
		const gameState = this.props.gameState
		const challengePoints = {
		};
		gameData.map(function(section) {
			section.challenges.map(function(challenge) {
				challengePoints[challenge.id] = challenge.points
			})
		})
		let score = Object.keys(gameState).reduce(function (prev, id) {
			let add = gameState[id] ? challengePoints[id] : 0;
			return prev + add
		}, 0)

		return (
			<h1>Points: {score}</h1>
		)
	}
}