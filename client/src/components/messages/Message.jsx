const Message = () => {
  return (
    <div class="chat chat-end">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div class="chat-bubble text-white bg-blue-500">
        It was said that you would, destroy the Sith, not join them.
      </div>
      <div class="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:46
      </div>
    </div>
  );
};

export default Message;
