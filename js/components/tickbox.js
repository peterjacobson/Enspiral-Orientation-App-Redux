var React = require('react');

module.exports = React.createClass({
	render: function () {
		var gameState = this.props.gameState;
		var id = this.props.id

		var divStyle = {
			position: 'absolute',
			width: '20',
			height: '20',
			backgroundColor: 'green'
		}
		return (
			<div 
				style={divStyle} 
				onClick={e => actions.toggleChallengeState(id)}>
			</div>
		)
	}
	// handleClick: function(e) {
	// 	var nextState = this.props.gameState;
	// 	console.log('click');
	// 	nextState.challenges[this.props.id] = !this.props.gameState.challenges[this.props.id]
	// 	this.props.changeGameState({ gameState: nextState })
	// 	this.setStyle()
	// },
	// setStyle: function() {
		
	// }
})