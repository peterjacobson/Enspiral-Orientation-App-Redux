import React, {Component} from 'react';

import gameData from "../../gameData"

const doneStyle = {
	position: 'absolute',
	height: '100%',
	width: '100%',
	background: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/NZ_Southern_Island_forest.jpg/1024px-NZ_Southern_Island_forest.jpg') no-repeat center",
	backgroundSize: 'cover',
}


const pointStyle = {
	position: 'absolute',
	width: '100%',
	color: 'white'
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
		const toDoStyle = {
			position: 'absolute',
			height: (100 - score) + '%',
			width: '100%',
			backgroundColor: 'black'
		}

		return (
			<div style={doneStyle}> 
				<div style={toDoStyle}> 
					<h1 style={pointStyle}>{score}</h1>
				</div>
			</div>
		)
	}
}