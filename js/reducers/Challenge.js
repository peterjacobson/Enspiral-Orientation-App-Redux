import * as ActionTypes from '../constants/ActionTypes';
import gameData from "../../gameData"

function initializeNewGameState() {
	var gameState = {
	};
	gameData.map(function(section) {
		section.challenges.map(function(challenge) {
			gameState[challenge.id] = false
		})
	})
	return gameState; // Check async
}

let defaultState = initializeNewGameState();

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CHALLENGE_STATE_TOGGLED:
      return {...state, [action.id]: !state[action.id]}
    default:
      return state;
  }
}
