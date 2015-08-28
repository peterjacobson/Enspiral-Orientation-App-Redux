import React from 'react';
import Challenge from './challenge';
import mui from 'material-ui'
let Paper = mui.Paper

const divStyle = {
	position: 'absolute',
	width: '100%',
}
const paperStyle = {
	padding: 20,
	marginBottom: 40,
	maxWidth: 600,
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
							<Challenge 
								challenge={challenge} 
								gameState={gameState} />
						)
					})}
					<p>{section.footer}</p>
				</div>
			</Paper>
		)
	}
})