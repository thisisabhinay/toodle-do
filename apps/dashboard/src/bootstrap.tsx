import * as React from "react"
import * as ReactDOM from "react-dom/client"
import DashboardApp from "./DashboardApp"

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root") as  ReactDOM.Container)

root.render(
  <React.StrictMode>
    <DashboardApp />
  </React.StrictMode>
)
