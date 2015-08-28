import React from 'react';
import Challenge from './challenge';
import mui from 'material-ui'
let Paper = mui.Paper
let Card = mui.Card

const divStyle = {
	position: 'absolute',
	width: '100%',
}
const paperStyle = {
	padding: 20,
}
const cardStyle = {
	padding: 10,
	marginBottom: 5,
}

module.exports = React.createClass({
	render: function () {
		const {section, gameState} = this.props;
		return (
			<Paper className='paper' style={paperStyle}>
				<div>
					<h3>{section.title}</h3>
					<p>{section.header}</p>
					{section.challenges.map(function(challenge) {
						return (
							<Card 
								className='card' 
								initiallyExpanded={true}
								style={cardStyle} >
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