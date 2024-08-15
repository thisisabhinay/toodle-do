import React, { useState } from "react"
import { Button, Label, Textarea } from "./index"

interface InboxInputProps {
  callback: (value: string) => void
}

const InboxInput: React.FC<InboxInputProps> = ({callback}) => {
  const [inboxEntry, setInboxEntry] = useState<string>("")
  
  function clickHandler(){
    callback(inboxEntry)
    setInboxEntry("")
  }
  return (
    <div className="grid w-full gap-1.5 p-5 rounded-xl border border-solid border-slate-200 shadow-md shadow-slate-200/30">
      <Label htmlFor="message-2">Add items to inbox</Label>
      <Textarea
        id="inbox-entries"
        placeholder="Add tasks, ideas, or notes..."
        value={inboxEntry}
        onChange={(e) => setInboxEntry(e.target.value ?? "")}
      />
      <p className="text-xs w-full text-muted-foreground">
        Press{" "}
        <pre className="inline-block rounded-sm border border-solid border-slate-300 px-1 bg-slate-100 text-xs font-mono">
          Enter
        </pre>{" "}
        to add each item as a separate entry in your inbox.
      </p>
      <Button className="w-fit mt-3" onClick={clickHandler}>
        Save
      </Button>
    </div>
  )
}

export default InboxInput
