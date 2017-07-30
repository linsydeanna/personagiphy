export const requestsReducer = (state = {}, { type, request, gifs }) => {
  switch (type) {
    case 'ADD_REQUEST':
    return [
      ...state,
      request
    ]
    default:
      return state;
  }
};

export const gifsReducer = (state = {}, { type, request, gifs }) => {
  switch (type) {
    case 'UPDATE_GIFS':
    return [
      ...gifs.data
    ]
    default:
      return state;
  }
};
