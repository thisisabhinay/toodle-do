import * as React from "react"
import * as ReactDOM from "react-dom/client"
import InboxApp from "./inbox-app"

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root") as  ReactDOM.Container)

root.render(
  <React.StrictMode>
    <InboxApp />
  </React.StrictMode>
)
