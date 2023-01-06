import React from "react";

import {
  PostTemp,
  P,
  H1,
  H2,
  Href,
  OL,
  UL,
  Img,
  Youtube,
  Table,
} from "../Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        KwickScreen, a UK-based company designing hospital isolation screens,
        mainly uses glass-fiber bistable tubes (C-tubes) to make their screens
        retractable. They’ve sponsored a design tournament, with a design prompt
        asking contestants to use C-tubes to enter new markets. My teammates and
        I chose this design prompt and eventually spent three weeks refining
        existing queue barriers.
      </P>
      <H1>Background</H1>
      <P>
        Queue barrier systems are used for maintaining efficient pedestrian flow
        and implementing social distancing. The system is widely used in malls,
        hotels, airports, hospitals etc. Currently, the commonly existing types
        are as follows.
      </P>
      <Table>
        <tr>
          <th>
            <Img {...props} image="Retractable_belt_barrier.PNG" width="100%" />
          </th>
          <th>
            <Img {...props} image="Post_and_rope_barrier.PNG" width="100%" />
          </th>
          <th>
            <Img {...props} image="Cafe_barrier.PNG" width="100%" />
          </th>
        </tr>
        <tr>
          <th>Retractable belt</th>
          <th>Post & rope</th>
          <th>Cafe</th>
        </tr>
      </Table>
      <P>
        Our team discovered that C-tube is a good fit to queue barrier systems
        due to its unique properties:
      </P>
      <UL>
        <li>Retractable and rigid</li>
        <li>Remains in place when extended</li>
      </UL>
      <Img {...props} image="C-tube.jpeg" />
      <P>Harnessing C-tube’s properties, we designed KwickLine.</P>
      <H1>What is KwickLine?</H1>
      <P>
        KwickLine is a queue barrier system with a retractable screen as the
        barrier. While the wide screen makes queue-jumping harder, the banner
        inside the screen can easily be customized.
      </P>
      <Table>
        <tr>
          <th>
            <Img {...props} image="No_queue_jump.PNG" width="100%" />
          </th>
          <th>
            <Img {...props} image="Customizable.PNG" width="100%" />
          </th>
        </tr>
        <tr>
          <th>✗ Queue-jumping</th>
          <th>✓ Customizable</th>
        </tr>
      </Table>
      <P>
        Each screen pulled from a column can be connected to another column in
        different positions. The screen direction is then adjustable to form
        different barrier systems.
      </P>
      <Img {...props} image="Using_KwickLine.PNG" />
      <Img {...props} image="Lock.gif" width="calc(var(--imageWidth)/2)" />
    </PostTemp>
  );
}
