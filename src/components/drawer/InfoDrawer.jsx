import React from "react";
import { Drawer, makeStyles, Box, Typography } from "@material-ui/core";
import { ArrowBack } from "@mui/icons-material";

// components
import Profile from "./Profile";
const useStyle = makeStyles({
    header:{
        background: '#00bfa5',
        height: '170px',
        color: '#fff',
        display: 'flex',
        '& > *':{
            marginTop:'auto',
            padding:15,
            fontWeight:600
        }
    }
});
const InfoDrawer = ({ open, setOpen }) => {
  const classes = useStyle();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
    >
      <Box className={classes.header}>
        <ArrowBack onClick={()=> setOpen(!open)} />
        <Typography>Profile</Typography>
      </Box>
      <Profile/>
    </Drawer>
  );
};

export default InfoDrawer;
