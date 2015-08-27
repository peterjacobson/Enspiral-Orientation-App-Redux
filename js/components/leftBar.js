var React = require('react');

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	render: function () {
		return (
			<h1>{this.props.gameState.points}</h1>
		)
	}
})