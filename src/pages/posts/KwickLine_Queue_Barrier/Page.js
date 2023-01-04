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
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </Table>
    </PostTemp>
  );
}
