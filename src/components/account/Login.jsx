import { useContext } from "react";
import {
  Dialog,
  withStyles,
  Box,
  makeStyles,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import { AccountContext } from "../context/AccountProvider";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../context/data";
import { addUser } from "../../service/api";
const useStyle = makeStyles({
  component: {
    margin: 40,
    display: "flex",
    justifyContent: "space-between",
  },
  leftComponent: {},
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
    height: "80%",
    maxWidth: "60%",
    width: "60%",
    marginTop: "5%",
    // boxShadow: "none",
    overflow: "hidden",
  },
};
const Login = ({ classes }) => {
  const classname = useStyle();
  const qrurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";
  // const clientId =
  //   "202904756314-2nhk164mvi7f18og6m5lmhj1kov4cr9s.apps.googleusercontent.com";
  const { setAccount } = useContext(AccountContext);
  const onLoginSuccess = async (res) => {
    // res.preventDefault()
    // alert("loging suess");    
    await addUser(res.profileObj);    
    setAccount(res.profileObj);

    // console.log(res.profileObj);
  };
  const onLoginFailure = () => {
    console.log("login faild");
  };
  return (
    <>
      <Dialog
        open={true}
        classes={{ paper: classes.dialogPaper, container: classes.container }}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
      >
        <Box className={classname.component}>
          <Box>
            <Typography className={classname.title}>
              To use WhatsApp on your computer:
            </Typography>
            <List className={classname.list}>
              <ListItem>1. Open WhatsApp on your phone</ListItem>
              <ListItem>
                2. Tap Menu or Settings and select Linked Devices
              </ListItem>
              <ListItem>
                3. Poin your phone to this sereen to capture the code
              </ListItem>
            </List>
          </Box>
          <Box style={{ position: "relative" }}>
            <img className={classname.qrcode} src={qrurl} alt="img" />
            <Box style={{ position: "absolute", top: "45%", left: "40%" }}>
              <GoogleLogin
                clientId={clientId}
                buttonText=""
                isSignedIn={true}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
              />
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default withStyles(style)(Login);
