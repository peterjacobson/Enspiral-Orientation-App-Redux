var React = require('react');
import gameData from '../../gameData'

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		const gameState = this.props.gameState
		let score = Object.keys(gameState).reduce(function (prev, id) {
			var add = gameState[id].completed ? gameState[id].points : 0;
			return prev + add
		}, 0)
		return (
			<h1>Points: {score}</h1>
		)
	}
})