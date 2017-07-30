export const queryReducer = (state = {}, { type, query }) => {
  switch (type) {
    case 'SEND_QUERY':
    return {
      query,
    }
    default:
      return state;
  }
};

export const gifsReducer = (state = {}, { type, gifs }) => {
  switch (type) {
    case 'UPDATE_GIFS':
    return [
      ...gifs.data
    ]
    default:
      return state;
  }
};
