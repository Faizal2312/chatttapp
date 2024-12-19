import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ msg }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation, message } = useConversation();
  const formatedTime = extractTime(msg.createdAt);

  const fromMe = msg.senderId === authUser._id;
  const chatclassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;


  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatclassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {msg.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatedTime}
      </div>
    </div>
  );
};

export default Message;
