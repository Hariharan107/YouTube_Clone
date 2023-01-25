import React from "react";
import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
const PageNotFound = () => (
  <h1
    style={{
      color: "#fff",
      fontSize: "25px",
      textAlign: "center",
      marginTop: "210px",
    }}
  >
    404: Page not found
  </h1>
);
const App = () => (
  <BrowserRouter>
    <Box sx={{ background: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
