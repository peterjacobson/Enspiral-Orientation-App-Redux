var React = require('react');

var TickBox = require('./tickbox');


var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		const {challenge, gameState} = this.props;
		return (
			<div className='challenge' id={challenge.id}>
				<div>
					<p>{challenge.title}</p>
					<p>{challenge.points}</p>
					<TickBox 
						id={challenge.id} 
						checked={gameState.id} />
				</div>
				<p>{challenge.description}</p>
			</div>
		)
	},
})