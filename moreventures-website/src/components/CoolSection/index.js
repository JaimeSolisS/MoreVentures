import React from "react";
import Video from "../../videos/video.mp4";
import Video2 from "../../videos/video2.mp4";
import Video3 from "../../videos/video3.mp4";
import Video4 from "../../videos/video4.mp4";
import { CoolContainer, CoolBackground, VideoBackground } from "./CoolElements";

const CoolSection = () => {
  return (
    <CoolContainer>
      <CoolBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </CoolBackground>
    </CoolContainer>
  );
};

export default CoolSection;
