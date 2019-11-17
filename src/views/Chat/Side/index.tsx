import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Card from './units/Card';

const conversations = [
  {
    name: 'People Name',
    time: '9:53 PM',
    message: 'message1',
    active: true
  },
  {
    name: 'People Name',
    time: '9:53 PM',
    message: 'message2'
  },
  {
    name: 'People Name',
    time: '9:53 PM',
    message: 'message3'
  }
];

interface Props {}

const Side: React.FC<Props> = () => {
  return (
    <div>
      <header>
        <Link to="/dashboard">Dashboard ></Link>
      </header>
      <TextField
        placeholder="Search"
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="disabled" />
            </InputAdornment>
          )
        }}
        variant="outlined"
      />
      {conversations.map((item, i) => (
        <Card {...item} key={i} />
      ))}
    </div>
  );
};

export default Side;
