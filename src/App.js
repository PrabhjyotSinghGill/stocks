import "./App.css";
import { Button, ButtonGroup } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Stocks</h1>
        <div className="searchBar">
          <TextField
            className="searchQuery"
            id="standard-basic"
            label="search"
            variant="standard"
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
      </div>
    </div>
  );
}

export default App;
