var React = require('react');

var TickBox = require('./tickbox');


const wrapperStyle = {
	position: 'relative',
	width: '100%',
}
const titleStyle = {
	display: 'inline-block',
	width: '80%'
}
const pointStyle = {
	display: 'inline-block',
	width: '10%'
}
const descriptionStyle = {
	display: 'inline-block',
	width: '100%'
}
const headerStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}



module.exports = React.createClass({
	render: function () {
		const {challenge, gameState} = this.props;
		const id = challenge.id
		return (
			<div className='challenge container' id={id}
				style={wrapperStyle}>
				<div className='container' style={headerStyle}>
					<strong style={titleStyle}>
						{challenge.title}
					</strong>
					<h3 style={pointStyle}>
						{challenge.points}
					</h3>
					<TickBox 
						id={id} 
						checked={gameState[id]} />
				</div>
				<div style={descriptionStyle}>
					{challenge.description}
				</div>
			</div>
		)
	},
})