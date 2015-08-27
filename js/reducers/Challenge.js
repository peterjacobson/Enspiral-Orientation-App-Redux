import * as ActionTypes from '../constants/ActionTypes';
import gameData from "../../gameData"

function initializeNewGameState() {
	var gameState = {
	};
	gameData.map(function(section) {
		section.challenges.map(function(challenge) {
			gameState[challenge.id] = {}
			gameState[challenge.id].completed = false
			gameState[challenge.id].points = challenge.points
		})
	})
	return gameState; // Check async
}

let defaultState = initializeNewGameState();

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CHALLENGE_STATE_TOGGLED:
    	console.log([action.id].completed);
      return {...state, [action.id].completed = !state[action.id].completed}
    default:
      return state;
  }
}
