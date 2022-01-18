import React, { useEffect, useState, useContext } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { getUsers } from "../../service/api.js";
import ConvearsationUser from "./ConvearsationUser.jsx";
import { AccountContext } from "../context/AccountProvider";

const useStyles = makeStyles({
  components: {
    overflow: "overlay",
  },
});
const Convearsation = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUser } = useContext(AccountContext);
  // console.log(account);
  const classes = useStyles();

  useEffect(() => {
    const getAllUser = async () => {
      const data = await getUsers();
      const filterData = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filterData);
    };
    getAllUser();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on('getUsers', users => {
      setActiveUser(users)
    })
  }, [account]);

  return (
    <Box className={classes.components}>
      {users.map((user) => {
        return (
          user.googleId !== account.googleId && (
            <ConvearsationUser user={user} />
          )
        );
      })}
    </Box>
  );
};

export default Convearsation;
