import React, { useContext } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { UserContext } from "../context/UserProvider.jsx";
import { Search, MoreVert } from "@material-ui/icons";
import { AccountContext } from "../context/AccountProvider.jsx";
const useStyles = makeStyles({
  ChatHeader: {
    width: "100%",
    height: "54px",
    display: "flex",
    justifyContent: "space-between",
    background: "#ededed",
    padding: "6.7px 10px",
  },
  chatPerson: {
    display: "flex",
    alignItems: "center",
  },
  images: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "50%",
  },
  names: {
    marginLeft: "10px",
  },
  times: {
    fontSize: "12px",
    marginLeft: "10px",
    color: "#444",
  },
  icon: {
    color: "#fff",
    marginRight: "20px",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#51585c",
      cursor: "pointer",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
    },
  },
});
const ChatHeader = () => {
  const { person } = useContext(UserContext);
  const { activeUser } = useContext(AccountContext);
  const classes = useStyles();
  // console.log(person);
  return (
    <div>
      <Box className={classes.ChatHeader}>
        <Box className={classes.chatPerson}>
          <Box>
            <img className={classes.images} src={person.imageUrl} alt="img" />
          </Box>
          <Box>
            <Typography className={classes.names}>{person.name}</Typography>
            <Typography className={classes.times}>
              {activeUser?.find((user) => user.userId === person.googleId)
                ? "online"
                : "offline"}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.icon}>
          <Search />
          <MoreVert />
        </Box>
      </Box>
    </div>
  );
};

export default ChatHeader;
