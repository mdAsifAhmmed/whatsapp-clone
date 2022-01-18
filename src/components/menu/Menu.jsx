import React, { useState } from "react";
import { Box } from "@material-ui/core";
//Components
import Header from "./Header";
import Search from "./Search";
import Convearsation from "./Convearsation";
const Menu = () => {
  const [text, setText] = useState("");
  return (
    <Box>
      <Header />
      <Search setText={setText} />
      <Convearsation text={text} />
    </Box>
  );
};

export default Menu;
