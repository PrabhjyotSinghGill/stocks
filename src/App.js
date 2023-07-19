import { Divider } from "@mui/material";
import "./App.css";
import Header from "./components/header";
import Information from "./components/information";
import Graph from "./components/graph";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Divider></Divider>
      <Information></Information>
      <Divider></Divider>
      <Graph></Graph>
    </div>
  );
}

export default App;
