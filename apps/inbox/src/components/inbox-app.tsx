import { EmptyState, InboxInput, Toaster } from "@repo/ui/components"
import { PackageOpen } from "@repo/ui/icons"
import "@repo/ui/styles.css"
import React, { Suspense, useReducer } from "react"
import { InboxAction } from "../enums/reducers"
import "../index.css"
import inboxReducer, { initialState } from "../reducers/inbox"

const InboxApp: React.FC = () => {
  const [state, dispatch] = useReducer(inboxReducer, initialState)

  function saveHandler(value: string) {
    dispatch({ type: InboxAction.Update, payload: value })
  }

  console.log(state.inbox)
  return (
    <Suspense fallback={<div>Inbox is Loading...</div>}>
      <div id="InboxApp">
        <div className="flex flex-col gap-4 container">
          <h1 className="text-xl font-semibold">Inbox</h1>
          <div className="container-item">
            <InboxInput callback={saveHandler} />
          </div>
          <div className="container-item">
            {state.inbox?.length ? (
              state.inbox?.map((item, i) => <div key={i}>{item}</div>)
            ) : (
              <EmptyState
                icon={PackageOpen}
                title="No items to show"
                description="It looks like the inbox is empty. Try adding some new items."
              />
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </Suspense>
  )
}

export default InboxApp
