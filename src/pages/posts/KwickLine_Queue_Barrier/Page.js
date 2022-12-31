import React from 'react'

import PostTemp from "../../main/posttemp/PostTemp"

export default function Page(props) {
  return (
    <PostTemp {...props}>
        children
    </PostTemp>
  )
}
