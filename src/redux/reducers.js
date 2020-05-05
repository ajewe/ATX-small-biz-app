import { combineReducers } from 'redux'

const listings = (state = [], action) => {
  switch(action.type) {
    case 'ADD_LISTING':
      return [ ...state, action.value ]
    case 'REMOVE_LISTING':
      const listings = [ ...state ]
      const targetListing = listings.find(listing => listing.id === action.value)
      targetListing.display = false
      return listings
    default:
      return state
  }
}

export default combineReducers({listings})