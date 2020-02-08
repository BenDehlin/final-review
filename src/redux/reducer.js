import actionTypes from './actionTypes'
const {GET_USER} = actionTypes
const initialState = {
  user: {}
}

export const getUser = (payload) => {
  return {
    type: GET_USER,
    payload
  }
}

export default function reducer(state = initialState, action){
  const {type, action} = action
  switch(type){
    case GET_USER:
      return {...state, user: payload}
    default:
      return state
  }
}