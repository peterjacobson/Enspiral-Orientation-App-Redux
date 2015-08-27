import * as ActionTypes from '../constants/ActionTypes';
import gameData from "../../gameData"

function initializeNewGameState() {
	var gameState = {
		points: 0,
		challenges: {},	
	};
	gameData.map(function(section) {
		section.challenges.map(function(challenge) {
			gameState.challenges[challenge.id] = false
		})
	})
	return gameState; // Check async
}

let defaultState = initializeNewGameState();
console.log(defaultState);

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CHALLENGE_STATE_TOGGLED:
    	//clone state object - this didn't work >> // let updatedState = Object.assign({}, state);
    	const updatedState = {}
    	Object.keys(state).map((key)=>{
    		updatedState[key] = state[key]
    	})
    	updatedState.challenges[action.id] = !state.challenges[action.id];
      return updatedState;
    default:
      return state;
  }
}
