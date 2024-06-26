

import { useEffect } from "react"
import Comments from "./Comments"
import { data } from "./data"



function NestedComment() {

  return (
    <>
      <h1>Nested Comment </h1>
      <Comments data={data} />
    </>
  )
}

export default NestedComment