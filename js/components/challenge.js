var React = require('react');

var TickBox = require('./tickbox');


const wrapperStyle = {
	position: 'absolute',
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



module.exports = React.createClass({
	render: function () {
		const {challenge, gameState} = this.props;
		const id = challenge.id
		return (
			<div className='challenge container' id={id}
				style={wrapperStyle}>
				<div className='container'>
					<strong style={titleStyle}>
						{challenge.title}
					</strong>
					<div style={pointStyle}>
						{challenge.points}
					</div>
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