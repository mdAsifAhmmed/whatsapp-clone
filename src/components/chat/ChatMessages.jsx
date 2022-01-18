import React, { useState, useContext, useEffect, useRef } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import ChatFooter from "./ChatFooter.jsx";
import Message from "./Message.jsx";

import { AccountContext } from "../context/AccountProvider.jsx";
import { newMessage, getMessages } from "../../service/api.js";

const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})`,
    backgroundSize: "40%",
    height: "100%",
    width: "100%",
  },
  components: {
    height: "74vh",
    overflowY: "scroll",
    paddingBottom:'5px'
  },
  chatWrapper: {
    width: "80%",
    margin: "0 auto",
    paddingTop: "5px",
  },
});
const ChatMessages = ({ person, conversation }) => {
  const classes = useStyles();

  const [value, setValue] = useState();
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);
  const scrollRef = useRef();

  // console.log(incomingMessage);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  });
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [conversation]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getMessageDetails = async () => {
      let response = await getMessages(conversation._id);
      setMessages(response.data);
    };
    getMessageDetails();
  }, [conversation?._id, person._id, newMessageFlag]);

  const receiverId = conversation?.members?.find(
    (member) => member !== account.googleId
  );

  const sendText = async (e) => {
    let key = e.keyCode || e.which;
    // console.log(value);
    if (!value) return;
    if (key === 13) {
      let message = {
        sender: account.googleId,
        conversationId: conversation._id,
        text: value,
      };
      socket.current.emit("sendMessage", {
        senderId: account.googleId,
        receiverId,
        text: value,
      });
      await newMessage(message);
      // return;
      setValue("");
      setNewMessageFlag((prev) => prev);
    }
  };
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.components}>
        {messages &&
          messages.map((message, id) => {
            return (
              <Box className={classes.chatWrapper} key={id} ref={scrollRef}>
                <Message message={message} />
              </Box>
            );
          })}
      </Box>
      <ChatFooter sendText={sendText} value={value} setValue={setValue} />
    </Box>
  );
};

export default ChatMessages;
