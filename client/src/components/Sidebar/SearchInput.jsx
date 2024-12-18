import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-hot-toast";

import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversations";

const SearchInput = () => {
  const [search, setSearch] = useState();
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("search term must be at least 3 character long");
    }
    const conversation = conversations.find((c) =>
      c.username.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found");
    }
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full "
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-circle bg-blue-500  text-white">
        <FaSearch className="w-4 h-4" />
      </button>
    </form>
  );
};

export default SearchInput;
