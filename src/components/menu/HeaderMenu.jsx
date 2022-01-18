import React, { useContext, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@material-ui/core";
import Drawer from "../drawer/InfoDrawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { clientId } from "../../context/data";
import { GoogleLogout } from "react-google-login";
import { AccountContext } from "../context/AccountProvider";
const useStyle = makeStyles({
  menuitem: {
    fontSize: "14 !important",
    color: "#4a4a4a !important",
    // padding: '0px 60px  important',
    padding: "15px 60px 5px 24px !important",
  },
  logout: {
    border: "none !important",
    boxShadow: "none !important",
    color: "#4a4a4a !important",
    background: "transparent !important",
    "& > *": {
      padding: "0px !important",
    },
  },
});

const HeaderMenu = () => {
  const classs = useStyle();
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { setAccount } = useContext(AccountContext);
  const handleClose = () => {
    setOpen(false);
  };
  const handleclick = (event) => {
    setOpen(event.currentTarget);
  };
  const onLogoutSuccess = () => {
    alert("logout suss");
    console.clear();
    setAccount("");
  };
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <MoreVertIcon onClick={handleclick} />
      <Menu
        id="simple-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          className={classs.menuitem}
          onClick={() => { handleClose(); toggleDrawer() }}
        >
          Profile
        </MenuItem>
        <MenuItem className={classs.menuitem}>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
            className={classs.logout}
          />
        </MenuItem>
      </Menu>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default HeaderMenu;
