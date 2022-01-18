import React, { useContext, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { AccountContext } from "../context/AccountProvider";
import MessageIcon from "@mui/icons-material/Message";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../drawer/InfoDrawer";
const useStyle = makeStyles({
  Header: {
    height: "37px",
    padding: "15px 16px",
    background: "#ededed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userAvater: {
    height: "35px",
    width: "35px",
    borderRadius: "50px",
  },
  icon: {
    color: "#fff",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
      cursor: "pointer",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
    },
  },
});

const Header = () => {
  const { account } = useContext(AccountContext);
  const classs = useStyle();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Box className={classs.Header}>
        <img
          onClick={() => toggleDrawer()}
          className={classs.userAvater}
          src={account.imageUrl}
          alt="user-picture"
        />
        <Box className={classs.icon}>
          <MessageIcon />
          <HeaderMenu />
        </Box>
      </Box>
      <InfoDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
