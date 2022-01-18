import React, { useState, useEffect } from "react";
import { Box, InputBase, makeStyles } from "@material-ui/core";
import { TagFaces, AttachFile, KeyboardVoice, Send } from "@material-ui/icons";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "7vh",
    background: "#ededed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
  },
  icon: {
    color: "#fff",
    // marginRight: "26px",
    display: "flex",
    "& > *": {
      padding: 3,
      color: "#51585c",
      cursor: "pointer",
      fontSize: "28px",
    },
    "&:first-child": {
      fontSize: 28,
      marginLeft: "2px",
      marginRight: "5px",
      //   marginRight: 8,
    },
  },
  sendIcon: {
    marginRight: "26px",
    display: "flex",
    marginLeft: 2,
    padding: 8,
    color: "#51585c",
    cursor: "pointer",
    fontSize: "28px",
  },
  imagessUpLink: {
    transform: "rotate(30deg)",
  },
  inputWrapper: {
    width: "100%",
    "& > *": {
      width: "100%",
      background: "#fff",
      padding: "4px 15px",
      borderRadius: "50px",
    },
  },
});

const ChatFooter = ({ sendText, setValue, value }) => {
  const classes = useStyles();
  // const [inputValue, setInputValue] = useState("");
  //   useEffect(() => {
  //     const changeValue = () => {
  //       if (inputValue === "") return setInputValue(false);
  //     };
  //     changeValue();
  //   }, [inputValue]);
  return (
    <Box className={classes.container}>
      <Box className={classes.icon}>
        <TagFaces />
        <AttachFile className={classes.imagessUpLink} />
      </Box>
      <Box className={classes.inputWrapper}>
        <InputBase
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type a messages"
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Box>
      <Box className={classes.sendIcon}>
        {value === "" ? (
          <KeyboardVoice />
        ) : (
          <Send onClick={(e) => sendText(e)} />
        )}
      </Box>
    </Box>
  );
};

export default ChatFooter;
