import React, { useContext } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { AccountContext } from "../context/AccountProvider";
const useStyle = makeStyles({
    components:{
        background: 'rgba(0,0,0,0.1)',
        height:'100%'
    },
  imgWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 0",
  },
  img: {
    height: "200px",
    width: "200px",
    borderRadius: "50%",
  },
  nameContainer: {
    background: "#fff",
    padding: "12px 30px 2px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    "& :first-child": {
      fontSize: 14,
      color: "#009699",
    },
    '& :last-child':{
        fontSize:14,
        margin:'8px 0'
    }
  },
  description: {
    padding: "10px 20px 28px 30px",
    "& > *": {
      fontSize: 12,
      color: "rgba(0,0,0,0.45)",
    },
  },
});

const Profile = () => {
  const { account } = useContext(AccountContext);
  const classes = useStyle();
  return (
    <Box className={classes.components}>
      <Box className={classes.imgWrapper}>
        <img className={classes.img} src={account.imageUrl} alt="userImg" />
      </Box>
      <Box className={classes.nameContainer}>
        <Typography>Your name</Typography>

        <Typography>{account.name}</Typography>
      </Box>
      <Box className={classes.description}>
        <Typography>
          This is not your username or pin. This name will visible to your
          whatsApp context
        </Typography>
      </Box>
      <Box className={classes.nameContainer}>
        <Typography>About</Typography>

        <Typography>Eat! Sleep! Code! Repeat!</Typography>
      </Box>
    </Box>
  );
};

export default Profile;
