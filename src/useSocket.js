import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:5000/';

export const useSocket = (roomId) => {
  const [data, setData] = useState({});

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.emit('get');

    socketRef.current.on('currentData', (data) => {
      setData(data);
    });
    socketRef.current.on('newData', (data) => {
      setData(data);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const modifyData = (data) => {
    socketRef.current.emit('set', data);
  };

  return { data, modifyData };
};
