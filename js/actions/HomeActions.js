import {TITLE_CHANGED} from '../constants/ActionTypes';
import {CHALLENGE_STATE_TOGGLED} from '../constants/ActionTypes';

export function changeTitle(text) {
  return {
    type: TITLE_CHANGED,
    text
  }
}

export function toggleChallengeState(id) {
  return {
    type: CHALLENGE_STATE_TOGGLED,
    id
  }
}
