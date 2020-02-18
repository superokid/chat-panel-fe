import React from 'react';
import socket from 'modules/socket';

interface Props {
  authId?: number;
  setMessage: (msg: { conversationId: number; message: string; type: string }) => void;
}

const ChatListener: React.FC<Props> = ({ authId, setMessage }) => {
  if (!authId) {
    throw new Error('no auth Id');
  }
  socket.emit('userConnected', authId);

  socket.on('chat message', (msg: { conversationId: number; message: string; type: string }) => {
    setMessage(msg);
  });
  return null;
};

export default ChatListener;
