import React from 'react';
import { Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
//css de alertify
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'



function App() {
  return (
    <div className="App">
      <Grid container>
        {/* Navbar de arriba  :0 se va a pasar a otro componente después*/}
        <Grid item xs={12}>
         <Navbar></Navbar>
        </Grid>
        {/* container c: */}
        <Grid item xs={12}>
          <Container />
        </Grid>
      </Grid>
      {/* sidebar .3. también se pasará a su componente :D*/}
      <Sidebar />
    </div>
  );
}

export default App;
