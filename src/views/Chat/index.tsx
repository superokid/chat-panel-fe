import React from 'react';
import Grid from '@material-ui/core/Grid';
import Main from './Main';
import Side from './Cards';

const Chat: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Side />
      </Grid>
      <Grid item xs={9}>
        <Main />
      </Grid>
    </Grid>
  );
};

export default Chat;
