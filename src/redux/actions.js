export const addListing = (listing) => {
  return {
    type: 'ADD_LISTING',
    value: listing
  }
}

export const removeListing = (elementId) => {
  return {
    type: 'REMOVE_LISTING',
    value: elementId
  }
}