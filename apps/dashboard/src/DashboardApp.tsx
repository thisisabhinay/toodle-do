import * as React from "react"
import "@repo/ui/styles.css"
import "./index.css"
import Button from '@repo/ui/button';

const DashboardApp: React.FC = () => {
  return (
    <div id="DashboardApp">
      <h1 className="text-3xl font-semibold">Hello from dashboard</h1>
      <Button className="cursor-pointer" appName="Some dashboard data">
        Message
      </Button>
    </div>
  )
}

export default DashboardApp
