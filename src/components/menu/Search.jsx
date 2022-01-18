import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, makeStyles } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
const useStyle = makeStyles({
  searchBox:{
    background: "#f9f9f9",
    padding: "10px 5px",
  },
  searchBarContainer: {
    display: "flex",
    alignItems: "center",
    padding: "2px 20px 2px 15px",
    borderRadius: "50px",
    background: "#fff"
  },
  searchIconWrapper: {
    color: "#4a4a4a !important",
    margin: "0 10px 0 0",
    transform: "translate(0px, 0px)",
    fontSize: "22px !important",
  },
  inputWrapper: {
    color: "#4a4a4a !important",
    width: "100%",
  },
});
const Search = ({ setText }) => {
  const classes = useStyle();
  return (
    <Box className={classes.searchBox}>
      <Box className={classes.searchBarContainer}>
        <SearchIcon className={classes.searchIconWrapper} />

        <InputBase
          className={classes.inputWrapper}
          placeholder="Search or start new chat"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Search;
