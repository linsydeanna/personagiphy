export const sendRequest = query => {
  return {
    type: 'SEND_QUERY',
    query
  }
};

export const updateGifs = gifs => ({
  type: 'UPDATE_GIFS',
  gifs
});
