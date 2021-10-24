import React from "react"
import {render} from "react-dom"
import {MDXProvider} from "@mdx-js/react"
import Post from "./index.mdx"

const components = {
  h1: (props) => <h1 style={{color: "orange"}} {...props} />,
}

render(
  <MDXProvider components={components}>
    <Post />
  </MDXProvider>,
  document.body
)
