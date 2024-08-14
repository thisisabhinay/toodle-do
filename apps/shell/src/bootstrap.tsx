import * as React from "react"
import * as ReactDOM from "react-dom/client"
import "@repo/ui/styles.css"
import "./index.css"
import ShellApp from "./ShellApp"

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root") as  ReactDOM.Container)

root.render(
  <React.StrictMode>
    <ShellApp />
  </React.StrictMode>
)
