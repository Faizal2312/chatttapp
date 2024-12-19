import { useEffect, useRef } from "react";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../../skeleton/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { message, loading } = useGetMessage();
  useListenMessages();
  const lastMessage = useRef();
  console.log("message", message);

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [message]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        message.length > 0 &&
        message.map((msg) => (
          <div key={msg._id} ref={lastMessage}>
            <Message key={msg._id} msg={msg} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && message.length === 0 && (
        <p className="text-center">Send a message to start a conversation</p>
      )}
    </div>
  );
};

export default Messages;
