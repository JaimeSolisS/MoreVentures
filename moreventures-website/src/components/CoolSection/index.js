import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import Video2 from "../../videos/video2.mp4";
import Video3 from "../../videos/video3.mp4";
import Video4 from "../../videos/video4.mp4";
import { Button } from "../ButtonElement";
import {
  CoolContainer,
  CoolBackground,
  VideoBackground,
  CoolContent,
  CoolH1,
  CoolP,
  CoolBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./CoolElements";

const CoolSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <CoolContainer>
      <CoolBackground>
        <VideoBackground autoPlay loop muted src={Video4} type="video/mp4" />
      </CoolBackground>
      <CoolContent>
        <CoolH1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </CoolH1>
        <CoolP>
          Corporis, officiis nam inventore voluptatem ducimus soluta repellat
          mollitia dolores consequatur excepturi et facilis quos numquam nisi
          laudantium accusantium quia quo molestias.
        </CoolP>
        <CoolBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CoolBtnWrapper>
      </CoolContent>
    </CoolContainer>
  );
};

export default CoolSection;
