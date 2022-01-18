import { useContext, useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { AccountContext } from "../context/AccountProvider";
import { setConversation } from "../../service/api.js";
import { UserContext } from "../context/UserProvider.jsx";

const useStyles = makeStyles({
  accountContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    margin: "20px 0",
    cursor: "pointer",
    '&::after':{
      content: "",
      width: '100%',
      height: '10px',
      background: "#f9f9f9"
    }
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
});

const ConvearsationUser = ({ user }) => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  const { setPerson} = useContext(UserContext)

  const setUser = async () => {
    setPerson(user)
    await setConversation({
      senderId: account.googleId,
      receiverId: user.googleId,
    });
  };
  return (
    <Box className={classes.accountContainer} onClick={() => setUser()}>
      <Box>
        <img className={classes.images} src={user.imageUrl} alt="img" />
      </Box>
      <Box>
        <Box>
          <Typography className={classes.names}>{user.name}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ConvearsationUser;
