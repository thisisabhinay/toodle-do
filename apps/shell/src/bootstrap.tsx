import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { Toaster } from "@repo/ui/components"
import "@repo/ui/styles.css"
import "./index.css"
import ShellApp from "./ShellApp"

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root") as  ReactDOM.Container)

root.render(
  <React.StrictMode>
    <div>
      <h1 className="text-3xl font-semibold">Hello from shell</h1>
      <ShellApp />
      <Toaster />
    </div>
  </React.StrictMode>
)
