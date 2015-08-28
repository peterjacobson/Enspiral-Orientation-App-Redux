var React = require('react');
import ReactMarkdown from 'react-markdown';
import mui from 'material-ui';
let Card = mui.Card;

var TickBox = require('./tickbox');


const titleStyle = {
	display: 'inline-block',
	width: '80%',
	textAlign: 'left',
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
}



module.exports = React.createClass({
	render: function () {
		const {challenge, gameState} = this.props;
		const id = challenge.id
		const cardStyle = {
			padding: 10,
			margin: 5,
			width: '100%',
			background: gameState[id] ? "#69F27B" : 'white',
		}
		return (
			<Card
				className='paper clearfix' 
				initiallyExpanded={true}
				style={cardStyle} >
				<div className='' style={headerStyle}>
					<h5 style={titleStyle}>
						{challenge.title}
					</h5>
					<h3 style={pointStyle}>
						{challenge.points}
					</h3>
					<TickBox 
						id={id} 
						checked={gameState[id]} />
				</div>
				<ReactMarkdown 
					style={descriptionStyle}
					source={challenge.description} />
			</Card>
		)
	},
})