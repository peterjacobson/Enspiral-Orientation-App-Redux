var React = require('react');
import gameData from "../../gameData"

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render() {
		const gameState = this.props.gameState
		var challengePoints = {
		};
		gameData.map(function(section) {
			section.challenges.map(function(challenge) {
				challengePoints[challenge.id] = challenge.points
			})
		})
		let score = Object.keys(gameState).reduce(function (prev, id) {
			var add = gameState[id] ? challengePoints[id] : 0;
			return prev + add
		}, 0)
		return (
			<h1>Points: {score}</h1>
		)
	}
})