var React = require('react');
var Challenge = require('./challenge')

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		var challenges = this.props.section.challenges;
		var gameState = this.props.gameState;
		var changeGameState = this.props.changeGameState;
		return (
			<div>
				<p>{this.props.section.header}</p>
				{challenges.map(function(challenge) {
					return (
						<Challenge 
							challenge={challenge} 
							gameState={gameState}
							changeGameState={changeGameState} />
					)
				})}
				<p>{this.props.section.footer}</p>
			</div>
		)
	}
})