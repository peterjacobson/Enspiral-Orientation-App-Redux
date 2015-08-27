var React = require('react');
var Challenge = require('./challenge')
import mui from 'material-ui'
let Paper = mui.Paper
let Card = mui.Card

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		const {section, gameState} = this.props;
		return (
			<Paper>
				<div>
					<p>{section.header}</p>
					{section.challenges.map(function(challenge) {
						return (
							<Card initiallyExpanded={true}>
								<Challenge 
									challenge={challenge} 
									gameState={gameState} />
							</Card>
						)
					})}
					<p>{section.footer}</p>
				</div>
			</Paper>
		)
	}
})