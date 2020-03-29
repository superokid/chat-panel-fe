import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { Message } from 'store/chat/type';

interface Props {
  authId?: number;
  setMessage: (msg: Message & { conversationId: number }) => void;
  getIntegrationToken: () => void;
}

const ChatListener: React.FC<Props> = ({ authId, setMessage, getIntegrationToken }) => {
  const socket = io(`${process.env.REACT_APP_ORIGIN}`, { path: '/chat' });

  useEffect(() => {
    getIntegrationToken();
    return () => {
      socket.removeAllListeners();
    };
  }, [getIntegrationToken]);

  if (!authId) {
    throw new Error('no auth Id');
  }

  socket.on('chat message', (msg: Message & { conversationId: number }) => {
    setMessage(msg);
  });

  socket.on('connect', () => {
    socket.emit('userConnected', authId);
  });

  socket.on('disconnect', (cause: string) => {
    console.log(cause, 'reconnect');
  });
  return null;
};

export default ChatListener;
