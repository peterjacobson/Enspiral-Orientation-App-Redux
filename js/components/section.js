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
	marginBottom: 10,
	maxWidth: 600,
}
const cardStyle = {
	padding: 10,
	margin: 5,
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		const {section, gameState} = this.props;
		return (
			<Paper className='paper' style={paperStyle}>
				<div>
					<h4>{section.title}</h4>
					<p>{section.header}</p>
					{section.challenges.map(function(challenge) {
						return (
							<Card
								className='paper container clearfix' 
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