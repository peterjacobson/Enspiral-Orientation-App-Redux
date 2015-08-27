import React, {Component} from 'react';

import Section from './section';


module.exports = React.createClass({
	render() {
		const divStyle = {
			position: 'absolute',
			width: '100%',
		}
		const {sections, gameState} = this.props
		return (
			<div> 
				<h1>Welcome To Enspiral</h1>
				<p>This is your journey into Enspiral</p>
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