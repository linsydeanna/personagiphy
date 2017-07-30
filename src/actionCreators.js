export const sendRequest = request => {
  return {
    type: 'ADD_REQUEST',
    request
  }
};

export const updateGifs = gifs => ({
  type: 'UPDATE_GIFS',
  gifs
});
