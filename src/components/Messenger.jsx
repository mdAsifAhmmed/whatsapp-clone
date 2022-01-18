import React, { useContext } from "react";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import Login from "./account/Login.jsx";
import ChatBox from "./ChatBox.jsx";
import { AccountContext } from "./context/AccountProvider";
const useStyle = makeStyles({
  loginHeader: {
    height: 166,
    background: "#128c7e",
    boxShadow: "none",
  },
});

const Messenger = () => {
  const classes = useStyle();
  const { account } = useContext(AccountContext);
  return (
    <Box>
      <AppBar className={classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      {account ? <ChatBox /> : <Login />}
    </Box>
  );
};

export default Messenger;
