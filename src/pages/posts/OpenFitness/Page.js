import React from 'react'

import { PostTemp, P } from "../Element"

export default function Page(props) {
  return (
    <PostTemp {...props}>
        <P>I’ve recently joined a hackathon with the theme “Social Entrepreneurship”. Under this, one of the sub-theme is “Healthier, Longer, Better Lives”. My teammate and I chose this hacking prompt and spent a month developing OpenFitness – a sports search filter with gamification elements.</P>
    </PostTemp>
  )
}
