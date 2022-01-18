import React, { useContext } from "react";

import {
  Dialog,
  withStyles,
  Box,
  makeStyles,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import Chat from "./chat/Chat";
import { UserContext } from "./context/UserProvider";
// components
import Menu from "./menu/Menu";
import Emptychat from "./chat/Emptychat";
const useStyle = makeStyles({
  component: {
    width: "100%",
    display: "flex",
    height: "100%",
    // justifyContent: "space-between",
  },
  leftComponent: {
    minWidth: 400,
    // background: "#f9f9f9",
    height: "100%",
  },
  rightComponent: {
    maxWidth: "100%",
    width: "100%",
    borderLeft: "1px solid rgb(0,0,0, 0.14)",
  },
  qrcode: {
    height: 264,
    width: 264,
  },
  title: {
    marginBottom: 37,
    fontSize: 32,
    color: "#525252",
    fontWeight: 300,
    fontFamily:
      "Segoe UI,Helvetica Meue, Helevetic,Lucida Grande,Arial, Ubuntu, Cantarell,Fira Sans,sans-serif",
  },
  list: {
    "& > *": {
      fontSize: 18,
      paddingLeft: 0,
      color: "#4a4a4a",
      fontWeight: 400,
    },
  },
});
const style = {
  container: {
    width: "100%",
  },
  dialogPaper: {
    height: "90%",
    maxWidth: "90%",
    width: "90%",
    marginTop: "1%",
    // boxShadow: "none",
    overflow: "hidden",
  },
};
const ChatBox = ({ classes }) => {
  const classname = useStyle();
  const { person } = useContext(UserContext);
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper, container: classes.container }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Menu />
        </Box>
        <Box className={classname.rightComponent}>
          {Object.keys(person).length ? <Chat /> : <Emptychat />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatBox);
