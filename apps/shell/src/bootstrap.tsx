import "@repo/ui/styles.css"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import ShellApp from "./components/shell-app"
import "./index.css"


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root") as  ReactDOM.Container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShellApp />
    </BrowserRouter>
  </React.StrictMode>
)
