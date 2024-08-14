import * as React from "react"
import "@repo/ui/styles.css"
import { useToast } from "@repo/ui/hooks"
import { Button } from '@repo/ui/components';
import "./index.css"

const DashboardApp: React.FC = () => {
  const { toast } = useToast()

  return (
    <div id="DashboardApp">
      <h1 className="text-xl font-semibold">Hello from dashboard</h1>
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM"
          })
        }}
      >
        Show Toast
      </Button>
    </div>
  )
}

export default DashboardApp
