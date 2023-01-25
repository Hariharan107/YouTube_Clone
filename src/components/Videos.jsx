import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos,direction }) => {
  if (!videos?.length) return "Loading...";

  console.log(videos);
  return (
    <Stack
      direction={direction|| 'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      // paddingLeft='50px'
      gap={2.2}
      sx={{pl:{sm:'50px'}}}
    >
      {videos.map((item, idx) => (
        <Box  key={idx} sx={{ ml: { sm: "6px"},mt:{sm:"13px"}  }}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
    
  );
};

export default Videos;
