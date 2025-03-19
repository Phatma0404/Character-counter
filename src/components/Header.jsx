import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/img/logo.svg";
import Light from "../assets/img/light.svg";
import Dark from "../assets/img/dark.svg";

const Header = ({ mode, handleChange }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={1}>
          <img src={Logo} />
          <Typography>Character Counter</Typography>
        </Stack>

        <Box
          component="button"
          onClick={handleChange}
          sx={{
            border: "none",
            cursor: "pointer",
            width: 44,
            height: 44,
            p: 0,
            bgcolor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={mode ? Dark : Light} alt="Theme Toggle" />
        </Box>
      </Stack>
    </>
  );
};

export default Header;
