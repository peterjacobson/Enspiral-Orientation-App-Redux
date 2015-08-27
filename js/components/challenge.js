var React = require('react');

var TickBox = require('./tickbox');


var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		const {challenge, gameState} = this.props;
		const id = challenge.id
		return (
			<div className='challenge' id={id}>
				<div>
					<p>{challenge.title}</p>
					<p>{challenge.points}</p>
					<TickBox 
						id={id} 
						checked={gameState[id].completed} />
				</div>
				<p>{challenge.description}</p>
			</div>
		)
	},
})