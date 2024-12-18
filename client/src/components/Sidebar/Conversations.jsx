import useGetConversation from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, Idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastInx={Idx === conversations.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;
