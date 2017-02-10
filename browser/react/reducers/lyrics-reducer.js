import {SET_LYRICS} from '../constants'
const initialState = {text: ''}

//reducer state creator based on action
export default function reducer(prevState = initialState, action) {
  switch (action.type) {
    case SET_LYRICS: return Object.assign({}, prevState, {text: action.lyric})
    default : return prevState
  }
}
