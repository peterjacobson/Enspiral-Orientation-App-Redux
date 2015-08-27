var React = require('react');

var TickBox = require('./tickbox');


var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		var challenge = this.props.challenge;
		var gameState = this.props.gameState;
		var changeGameState = this.props.changeGameState;
		return (
			<div className='challenge' id={this.props.challenge.id}>
				<div>
					<p>{challenge.title}</p>
					<p>{challenge.points}</p>
					<TickBox 
						id={this.props.challenge.id} 
						gameState={gameState}
						changeGameState={changeGameState} />
				</div>
				<p>{challenge.description}</p>
			</div>
		)
	},
})