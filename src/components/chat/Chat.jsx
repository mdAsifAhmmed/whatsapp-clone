import React, { useEffect, useContext, useState } from "react";

import { UserContext } from "../context/UserProvider.jsx";
import { AccountContext } from "../context/AccountProvider.jsx";
import { getConversation } from "../../service/api.js";
// components
import ChatMessages from "./ChatMessages.jsx";
import ChatHeader from "./ChatHeader.jsx";
import { Box } from "@material-ui/core";
const Chat = () => {
  const { person, setPerson } = useContext(UserContext);
  const { account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  // console.log(account.googleId);
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        sender: account.googleId,
        receiver: person.googleId,
      });
      // console.log(data);
      setConversation(data);
    }
    getConversationDetails();
  }, [person.googleId]);

  return (
    <Box>
      <ChatHeader person={person} />
      <ChatMessages person={person} conversation={conversation} />
    </Box>
  );
};

export default Chat;
