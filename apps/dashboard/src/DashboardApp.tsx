import * as React from "react"
import "@repo/ui/styles.css"
import { useToast } from "@repo/ui/hooks"
import { Button, Toaster } from '@repo/ui/components';
import "./index.css"

const DashboardApp: React.FC = () => {
  const { toast } = useToast()

  function clickHandler(e: React.SyntheticEvent) {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM"
    })
  }

  return (
    <div id="DashboardApp">
      <h1 className="text-xl font-semibold">Hello from dashboard</h1>
      <Button
        onClick={clickHandler}
      >
        Show Toast
      </Button>
      <Toaster/>
    </div>
  )
}

export default DashboardApp
