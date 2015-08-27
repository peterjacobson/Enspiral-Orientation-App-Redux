var React = require('react');

var Section = require('./section');

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		var sections = this.props.sections;
		var gameState = this.props.gameState;
		var changeGameState = this.props.changeGameState;
		return (
			<div> 
				<h1>Welcome To Enspiral</h1>
				<p>This is your journey into Enspiral</p>
				{sections.map(function(section) {
					return (
						<Section 
							section={section} 
							gameState={gameState}
							changeGameState={changeGameState} />
					)
				})}
				<p> {this.state} </p>
			</div>
		)
	}
})