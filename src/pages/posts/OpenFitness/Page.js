import React from "react";

import { PostTemp, P, H1, Img } from "../Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        I’ve recently joined a hackathon with the theme “Social
        Entrepreneurship”. Under this, one of the sub-theme is “Healthier,
        Longer, Better Lives”. My teammate and I chose this hacking prompt and
        spent a month developing OpenFitness – a sports search filter with
        gamification elements.
      </P>
      <H1>Problems</H1>
      <P>
        As students who want to stay active and maintain a balanced lifestyle,
        we often find it incredibly difficult to do so without tools to help us
        out.
      </P>
      <Img image="/OpenFitness/pictures/Problem_1.PNG"/>
    </PostTemp>
  );
}
