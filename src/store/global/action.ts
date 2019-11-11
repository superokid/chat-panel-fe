export const error = (err: Error) => (dispatch: any) => {
  if ((err || {}).message === 'Network Error') {
    return null;
  }
  console.log(err);
};
