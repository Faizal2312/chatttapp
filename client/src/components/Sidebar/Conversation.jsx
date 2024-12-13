const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-blue-500 rounded p-2 py-2 cursor-pointer">
        <div className="avatar online ">
          <div className="w-12 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 ">John doe</p>
            <span className="text-xl">🐱‍👤 </span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1 "></div>
    </>
  );
};

export default Conversation;
