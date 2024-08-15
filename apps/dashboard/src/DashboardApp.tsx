import { Button, Toaster } from "@repo/ui/components"
import { useToast } from "@repo/ui/hooks"
import "@repo/ui/styles.css"
import React, { Suspense } from "react"
import "./index.css"

const DashboardApp: React.FC = () => {
  const { toast } = useToast()

  function clickHandler() {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM"
    })
  }

  return (
    <Suspense fallback={<div>Page is Loading...</div>}>
      <div id="DashboardApp">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <Button onClick={clickHandler} className="w-fit">
            Show Toast
          </Button>
        </div>
        <Toaster />
      </div>
    </Suspense>
  )
}

export default DashboardApp
