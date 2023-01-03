import React from "react";

import { PostTemp, P, H1, H2, Href, OL, UL, Img, Youtube } from "../Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        This is one of the most ambitious projects I have ever done, as well as
        my first single-handed robot project – from mechanical CAD, prototyping,
        programming to testing. My main goal is to try 3D printing and computer
        vision libraries (OpenCV and Mediapipe). Initially, I wished to practice
        using Raspberry Pi but then realized its hardware cannot support my
        program. Eventually, I used my laptop for computation and used HC-05
        (the only wireless chip readily available at home) to send serial data
        to control my Arduino Uno.
      </P>
      <H1>Steps</H1>
      <P>
        I split the workflow into four main blocks – movement, computer vision,
        serial connection, and finalization as follows:
      </P>
      <H2>Movement</H2>
      <OL>
        <li>CAD the robot hand’s general dimension</li>
        <li>CAD all components</li>
        <li>3D print all components</li>
        <li>Color the gems and assemble all parts</li>
        <li>Test finger movements</li>
      </OL>
      <H2>Computer Vision</H2>
      <OL>
        <li>
          Write Python code (using OpenCV and mediapipe) to detect individual
          finger’s movement
        </li>
      </OL>
      <H2>Serial Connection</H2>
      <OL>
        <li>Test wired and wireless connection with LED</li>
        <li>Connect strings with servo and test finger movement</li>
      </OL>
      <H1>Movement</H1>
      <P>
        My goal is to fit 5 servos into the arm. I subsequently designed the
        rough size of the whole hand as follows:
      </P>
      <Img {...props} image="Rough_sketch.PNG" />
      <P>
        Afterwards, I CAD all the components one by one. I split the components
        into 5 categories – arm, base, fingers, hand, and servo.
      </P>
      <P>
        Designing the servo bed is rather challenging, as I have to consider
        both the servo position and holes for wires to go through. For the outer
        shells, the patterns are easily made with the “wrap” function. The
        electronic components are all placed in the base.
      </P>
      <P>The final Solidworks assembly is as follows:</P>
      <Img {...props} image="Whole_Assembly.PNG" />
      <P>And the inner structure is as follows:</P>
      <Img {...props} image="Whole_Assembly_Internal.PNG" />
      <P>
        After converting files to STL and generating GCode using Ultimate Cura
        Slicer, I printed the components with Ender 3 V2 3D printer using gold
        and black PLA filament.
      </P>
      <P>
        The course of the assembly made me discover a number of flaws made in
        the design:
      </P>
      <UL>
        <li>
          The back instead of the front should be thickened, so that I could
          stick the parts (e.g. hand lid) to the back instead of the front for
          easier assembly
        </li>
        <li>
          More space should be left between the walls of the finger joints, such
          that I do not need to sand as much to smoothen finger motion
        </li>
        <li>
          The hole size for M4 screws should be about 3mm instead of 2mm
          (eventually I have to drill the holes to make them larger)
        </li>
        <li>
          It’s better for some holes to be drilled after printing, since the
          printing tolerance will make holes unaligned
        </li>
      </UL>
      <P>
        Upon assembling the fingers with the fishing string, I tried the test
        their movements. The finger mechanism is inspired by InMoov’s design.
        Each finger is controlled by 2 strings – one for extension, and one for
        contraction, with the 1.75mm filament connecting the joints as follows:
      </P>
    </PostTemp>
  );
}
