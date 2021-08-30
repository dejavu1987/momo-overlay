import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const SERVER_URL = "https://momo-stream-socket.herokuapp.com/";

export const useSocket = (roomId) => {
  const [data, setData] = useState({});

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      query: { roomId }
    });

    socketRef.current.emit("get");

    socketRef.current.on("currentData", (data) => {
      setData(data);
    });
    socketRef.current.on("newData", (data) => {
      setData(data);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const modifyData = ({ topic, chapter, section }) => {
    socketRef.current.emit("set", {
      topic,
      chapter,
      section
    });
  };

  return { data, modifyData };
};
