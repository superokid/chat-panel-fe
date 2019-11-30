import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Card from './Card';
import { Conversation } from 'store/chat/type';

interface Props {
  getConversationStaff: () => void;
  setConversationActive: (conversationId: number) => void;
  getMessages: (id: number) => void;
  conversations: Conversation[];
  activeConversation: number;
}

const Side: React.FC<Props> = ({
  getConversationStaff,
  setConversationActive,
  conversations,
  activeConversation,
  getMessages
}) => {
  useEffect(() => {
    getConversationStaff();
  }, [getConversationStaff]);

  const handleClick = (val: number) => {
    getMessages(val);
    setConversationActive(val);
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
        <Card {...item} key={i} active={activeConversation === item.id} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Side;
