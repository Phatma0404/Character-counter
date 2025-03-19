import "./App.css";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Paper } from "@mui/material";

function App() {
  const [mode, setMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setMode(!mode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        sx={{ margin: 0, minHeight: "100vh", padding: 2 }}
        elevation={0}
        square
      >
        <Container>
          <Header mode={mode} handleChange={handleChange} />
          <MainPage mode={mode} />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
