import React, { useState } from "react";
import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";

const MainPage = ({ mode }) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [limitedBtn, setLimitedBtn] = useState(false);
  const [spaces, setSpaces] = useState(false);

  const [letterCount, setLetterCount] = useState({});

  const countEachLetters = (str) => {
    const letterCount = str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
      }, {});
    setLetterCount(letterCount);
  };

  const handleChange = (e) => {
    const text = e.target.value;
    const maxLength = 300;
    console.log("text budur", text);

    // Limit 300 characters
    if (text.length > maxLength && limitedBtn === true) {
      alert("Limiti keçdiniz!");
      return;
    }

    // const textCount = text.length;
    if (spaces) {
      const textCount = text.replace(/\s/g, "").length;
      setCount(textCount.toString().padStart(2, "0"));
    } else {
      const textCount = text.length;
      setCount(textCount.toString().padStart(2, "0"));
    }

    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount(wordCount.toString().padStart(2, "0"));

    const sentenceCounts = text.trim()
      ? text
          .trim()
          .split(/[.!?]+/)
          .filter((s) => s.trim() !== "").length
      : 0;
    setSentenceCount(sentenceCounts.toString().padStart(2, "0"));

    console.log("Sentence Count:", sentenceCounts);

    countEachLetters(text);
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "45px",
        }}
      >
        <Typography
          style={{
            fontSize: "64px",
            fontWeight: "700",
            maxWidth: "510px",
            lineHeight: "100%",
            marginTop: "40px",
          }}
        >
          Analyze your text in real-time.
        </Typography>
      </div>
      <div>
        <textarea
          className="textarea"
          rows={5}
          cols={100}
          placeholder="Start typing here… (or paste your text)"
          style={{
            width: "100%",
            height: "200px",
            background: mode ? "rgba(42, 43, 55, 1)" : "rgba(242, 242, 247, 1)",
            // color: mode ? "#fff" : null,
            border: "15px",
            outline: "rgba(242, 242, 247, 1)",
            padding: "15px",
            fontSize: "15px",
            fontWeight: "bold",
            marginTop: "30px",
            cursor: "pointer",
            borderRadius: "15px",
          }}
          onChange={handleChange}
        ></textarea>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "rgba(211, 160, 250, 1)",
                    "&.Mui-checked": {
                      color: "rgba(211, 160, 250, 1)",
                    },
                  }}
                />
              }
              value={spaces}
              onChange={() => setSpaces(!spaces)}
              label="Exclude Spaces"
              id="check1"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "rgba(211, 160, 250, 1)",
                    "&.Mui-checked": {
                      color: "rgba(211, 160, 280, 1)",
                    },
                  }}
                />
              }
              label="Set Character Limit"
              value={limitedBtn}
              onChange={() => setLimitedBtn(!limitedBtn)}
              //   id="check2"
            />
            {limitedBtn && (
              <button
                style={{
                  width: "55px",
                  height: "29px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                300
              </button>
            )}
          </FormGroup>
        </div>
        <div>
          <span>Approx. reading time: 0 minute</span>
        </div>
      </div>

      <Stack display="flex" spacing={5} justifyContent="space-between">
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                first: "rgba(211, 160, 250, 1)",
                second: "rgba(255, 159, 0, 1)",
                third: "rgba(254, 129, 89, 1)",
              },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: 320,
                height: 150,
                borderRadius: 1,
                bgcolor: "primary.first",
                position: "relative",
                // "&:hover": {
                //     bgcolor: "primary.dark",
                // },
              }}
            >
              <div
                style={{ position: "absolute", margin: "10px" }}
                // onChange={wordCount}
              >
                {count ? (
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "33px",
                      margin: "10px",
                    }}
                  >
                    {count}
                  </p>
                ) : (
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "33px",
                      margin: "10px",
                    }}
                  >
                    00
                  </p>
                )}
                <p style={{ margin: "10px" }}>Total Characters</p>
              </div>
            </Box>

            <Box
              sx={{
                width: 320,
                height: 150,
                borderRadius: 1,
                bgcolor: "primary.second",
                position: "relative",
                // "&:hover": {
                //     bgcolor: "primary.dark",
                // },
              }}
            >
              <div style={{ position: "absolute", margin: "10px" }}>
                {wordCount ? (
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "33px",
                      margin: "10px",
                    }}
                  >
                    {wordCount}
                  </p>
                ) : (
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "33px",
                      margin: "10px",
                    }}
                  >
                    00
                  </p>
                )}
                <p style={{ margin: "10px" }}>Word Count</p>
              </div>
            </Box>

            <Box
              sx={{
                width: 320,
                height: 150,
                borderRadius: 1,
                bgcolor: "primary.third",
                position: "relative",
                // "&:hover": {
                //     bgcolor: "primary.dark",
                // },
              }}
            >
              <div style={{ position: "absolute", margin: "10px" }}>
                {sentenceCount ? (
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "33px",
                      margin: "10px",
                    }}
                  >
                    {sentenceCount}
                  </p>
                ) : (
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "33px",
                      margin: "10px",
                    }}
                  >
                    00
                  </p>
                )}

                <p style={{ margin: "10px" }}>Sentence Count</p>
              </div>
            </Box>
          </Box>
        </ThemeProvider>
      </Stack>

      {/* <Typography
        sx={{ fontWeight: "bold", fontSize: "24px", margin: "25px 0" }}
      >
        Letter Density
      </Typography> */}
      {/* <Typography sx={{ fontSize: "16px" }}>
        No characters found. Start typing to see letter density.
      </Typography>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>E</Typography>
          <progress
            value={0.5}
            style={{ color: "red" }}
            bsPrefix="progress-bar"
          />
          <Typography>40 (16.06%)</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>I</Typography>
          <progress
            value={0.5}
            style={{ color: "red" }}
            bsPrefix="progress-bar"
          />

          <Typography>29 (11.65%)</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>T</Typography>
          <progress
            value={0.5}
            style={{ color: "red" }}
            bsPrefix="progress-bar"
          />

          <Typography>28 (11.24%)</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>O</Typography>
          <progress
            value={0.5}
            style={{ color: "red" }}
            bsPrefix="progress-bar"
          />

          <Typography>22 (8.84%)</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>N</Typography>
          <progress
            value={0.5}
            style={{ color: "red" }}
            bsPrefix="progress-bar"
          />

          <Typography>40 (16.06%)</Typography>
        </Box>
      </Box> */}

      <Typography
        sx={{ fontWeight: "bold", fontSize: "24px", margin: "25px 0" }}
      >
        Letter Density
      </Typography>

      {Object.keys(letterCount).length === 0 ? (
        <Typography sx={{ fontSize: "16px" }}>
          No characters found. Start typing to see letter density.
        </Typography>
      ) : (
        <Box>
          {Object.entries(letterCount).map(([letter, count]) => {
            const percentage = (
              (count / Object.values(letterCount).reduce((a, b) => a + b, 0)) *
              100
            ).toFixed(2);

            return (
              <Box
                key={letter}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>{letter.toUpperCase()}</Typography>
                <progress
                  className="progress-bar"
                  value={percentage / 100}
                  max="1"
                />
                <Typography>
                  {count} ({percentage}%)
                </Typography>
              </Box>
            );
          })}
        </Box>
      )}
    </div>
  );
};

export default MainPage;
