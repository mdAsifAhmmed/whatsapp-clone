import { createContext, useState, useRef, useEffect } from "react";

import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [activeUser, setActiveUser] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  // console.log(account);
  const socket = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);
  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        socket,
        setActiveUser,
        activeUser,
        newMessageFlag,
        setNewMessageFlag,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
