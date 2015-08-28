import React, {Component} from 'react';
import Section from './section';

module.exports = React.createClass({
	render() {
		const divStyle = {
			display: 'inline-block',
			position: 'absolute',
			width: '70%',
			marginLeft: '20%',
		}
		const {sections, gameState} = this.props
		return (
			<div style={divStyle}>
				<img src='http://static1.squarespace.com/static/5169f4a1e4b0fdc6c23ef665/t/516a30bae4b0af9d19e3be3d/1432077874116/' alt='enspiral logo' style={{height:55, width:55, marginRight:20, display:'inline'}}/> 
				<h1 style={{display:'inline'}}>Welcome to Enspiral&nbsp;&nbsp; ; )</h1>
				<div style={{width: '85%', marginTop: 30}}>
					<p>There is a lot going on here - many people and projects working together in a complex way. We are here to here to help you find where you fit, to do great mahi with awesome people.</p>
					<p>This is a guide - if you can get to 100 points, you will likely have found your sweet spot here. All the best!</p>
				</div>
				{sections.map(function(section) {
					return (
						<Section 
							section={section} 
							gameState={gameState} />
					)
				})}
				<p> {this.state} </p>
			</div>
		)
	}
})