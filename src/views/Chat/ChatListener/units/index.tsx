import React from 'react';
import socket from 'modules/socket';

interface Props {
  setMessage: (msg: { conversationId: number; message: string; type: string }) => void;
}

const ChatListener: React.FC<Props> = ({ setMessage }) => {
  // TODO: auth userId
  socket.emit('userConnected', 1);

  socket.on('chat message', (msg: { conversationId: number; message: string; type: string }) => {
    setMessage(msg);
  });
  return null;
};

export default ChatListener;
