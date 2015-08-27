var React = require('react');
var Challenge = require('./challenge')

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		const {section, gameState} = this.props;
		return (
			<div>
				<p>{section.header}</p>
				{section.challenges.map(function(challenge) {
					return (
						<Challenge 
							challenge={challenge} 
							gameState={gameState} />
					)
				})}
				<p>{section.footer}</p>
			</div>
		)
	}
})