import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import { Paper, Switch } from "@mui/material";

function App() {
  const [mode, setMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: mode ? 'dark' : "light",
    },
  });

  const handleChange = () => {
    setMode(!mode)
  }

  // https://www.figma.com/design/7YtqVQ3l9vyeFkNo4tOKkm/character-counter?node-id=208-81&p=f&t=eiDjI4H33gUjdic4-0
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ margin: 0, minHeight: "100vh", padding: 2 }} elevation={0} square>
        <Container>
          <Header mode={mode} handleChange={handleChange} />
          <MainPage mode={mode} />

        </Container>
      </Paper>


    </ThemeProvider>

  );
}

export default App;
