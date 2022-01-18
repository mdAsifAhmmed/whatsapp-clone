import { Box, Typography, makeStyles } from "@material-ui/core";
import { LaptopMac } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  component: {
    background: "#f8f9fa",
    padding: "50px 0",
    textAlign: "center",
    height: "100%",
  },
  container: {
    padding: "0 200px",
    [theme.breakpoints.down("sm")]: {
      padding: -0,
    },
  },
  image: {
    width: 320,
  },
  title: {
    fontSize: 36,
    fontWeight: 300,
    color: "#525252",
    marginTop: 25,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.45)",
  },
  fWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "1px solid rgba(0 0 0 / 16%)",
    marginTop: "22px",
    paddingTop: "15px",
  },
}));
const Emptychat = () => {
  const classes = useStyles();

  const url = "/images/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg";

  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={url} alt="images" className={classes.image} />
        <Typography className={classes.title}>
          Keep your phone connected
        </Typography>
        <Typography className={classes.subTitle}>
          Whatsapp connects you to your phone to sync messages. To reduce data
          usage, connect your phone to Wi-Fi.
        </Typography>
        <Box className={classes.fWrapper}>
          <LaptopMac className={classes.subTitle} />
          <Typography className={classes.subTitle}>
            Make calls from desktop with WhatsApp for Windows.{" "}
          </Typography>
        </Box>
        {/* <Divider className={classes.divider} /> */}
      </Box>
    </Box>
  );
};

export default Emptychat;
