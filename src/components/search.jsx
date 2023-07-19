import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import "../views/search.css";

function Search() {
  return (
    <div className="search">
      <TextField
        className="searchQuery"
        id="standard-basic"
        label="search"
        variant="standard"
        InputProps={{ disableUnderline: true }}
      />
      <ButtonGroup variant="text" className="searchButton">
        <Button>
          <CloseIcon></CloseIcon>
        </Button>
        <Button>
          <SearchIcon></SearchIcon>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Search;
