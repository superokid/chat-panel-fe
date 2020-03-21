import React, { useEffect } from 'react';
import socket from 'modules/socket';
import { Message } from 'store/chat/type';

interface Props {
  authId?: number;
  setMessage: (msg: Message & { conversationId: number }) => void;
  getIntegrationToken: () => void;
}

const ChatListener: React.FC<Props> = ({ authId, setMessage, getIntegrationToken }) => {
  useEffect(() => {
    getIntegrationToken();
    return () => {
      socket.removeAllListeners();
    };
  }, [getIntegrationToken]);

  if (!authId) {
    throw new Error('no auth Id');
  }
  socket.emit('userConnected', authId);

  socket.on('chat message', (msg: Message & { conversationId: number }) => {
    setMessage(msg);
  });
  return null;
};

export default ChatListener;
