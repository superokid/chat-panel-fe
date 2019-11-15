export const error = (err: Error) => {
  if ((err || {}).message === 'Network Error') {
    return {
      type: 'ERROR'
    };
  }
  return {
    type: 'ERROR'
  };
};
