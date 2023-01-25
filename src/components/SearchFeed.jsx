import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "./";
import {useParams} from 'react-router-dom'
import { fetchFromAPI } from "../utils/fetchFromAPI";
const SearchFeed = () => {
 const {searchTerm}=useParams()
  const [videos, SetVideos] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const response = await fetchFromAPI(
        `search?part=snippet&q=${searchTerm}}`
      );
      const data = await response.items;
      SetVideos(data);
    };
    fetching();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
