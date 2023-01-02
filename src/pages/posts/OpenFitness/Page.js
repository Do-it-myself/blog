import React from "react";

import { PostTemp, P, H1, H2, Img, Youtube } from "../Element";

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
      <Img {...props} image="Problem_1.PNG" />
      <P>
        For instance, I would like to stay active by enjoying different sports
        with my friends. However, as university students, all of us have
        incredibly packed timetables. None of us could afford the time to plough
        through dozens of search results to find one that fits all of our needs.
        In the end, we end up studying in our rooms rather than meeting up and
        doing sports. It’s too time-consuming to search for sports venues.
      </P>
      <Img {...props} image="Problem_2.PNG" />
      <P>
        As for my teammate, he has always wanted to improve his physique by
        heading to the gym a few times each week. Working out is a long-term
        commitment – it takes months of consistent workouts for results to show,
        but as a university student, he’d prefer working on his coursework
        assignments over working out because it feels like a more efficient use
        of my time. It’s difficult for him to stay motivated and disciplined to
        work out because the results take a long time to show.
      </P>
      <P>
        In fact, based on the AIA Healthier Together Survey, it is more
        important for one to stay physically active than staying mentally active
        in order to feel engaged in life. Among the eight ingredients of a
        healthier, longer, better life is being active and engaged. We can see
        that sports play a significant role in ensuring one’s well-being.
        However, another study states that over 50% of my hometown’s population
        fails to meet the baseline physical activity level. We are simply not
        doing enough sports for our well-being.
      </P>
      <P>
        To address these issues, OpenFitness combines a search filter for sports
        venues with gamification elements, with the goal of promoting an active
        lifestyle among people. There are three main features that make the app
        stand out from the competition.
      </P>
      <Img {...props} image="OpenFitness.jpg" />
      <H1>Features</H1>
      <H2>Efficient - Filter</H2>
      <P>
        Our search filter makes it more efficient to look for sports venues that
        fit the user’s criteria. For us, it’s never been more frustrating to
        look for a sports venue that seems like a perfectly good fit, only to
        find out that it won’t be open on the day you’re planning to go there,
        or that it’s out of your budget. This process of searching, browsing,
        and eliminating, can be extremely time-consuming and exhausting for the
        user. Using our centralized sports-only search engine, OpenFitness
        streamlines this process by allowing users to filter based on common
        criteria like location, price, type of sports, and opening hours. It
        then generates a list of matching results. Users can click on any of the
        results for details, where information, photos, and reviews of the
        sports venue are all organized on one page.
      </P>
      <Youtube id="WDIw7B_2k2A"/>
    </PostTemp>
  );
}
