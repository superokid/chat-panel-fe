import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Card from './Card';
import { Conversation } from 'store/chat/type';

interface Props {
  getConversationStaff: () => void;
  getMessages: (id: number) => void;
  conversations: Conversation[];
}

const Side: React.FC<Props> = ({ getConversationStaff, getMessages, conversations }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    getConversationStaff();
  }, [getConversationStaff]);

  const handleClick = (val: number) => {
    getMessages(val);
    setActiveIndex(val);
  };

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
        <Card {...item} key={i} active={activeIndex === item.id} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Side;
