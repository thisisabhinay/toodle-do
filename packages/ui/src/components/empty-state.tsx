import { CircleAlert } from "lucide-react"
import React from "react"

interface EmptyStateProps {
  icon?: React.FunctionComponent<any>
  title?: string
  description?: string
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
}) => {
  const iconStyle = "size-10 text-slate-500 dark:text-slate-400 stroke-1"
  const Icon = React.createElement(icon as React.FunctionComponent<any>, {
    className: iconStyle,
  })
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-6">
      <div className="flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full dark:bg-slate-800">
        {icon ? Icon : <CircleAlert className={iconStyle} />}
      </div>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-medium tracking-tight text-slate-800 dark:text-slate-100">
          {title ? title : "No data to display"}
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          {description
            ? description
            : "It looks like there's no data available yet. Try adding some new items."}
        </p>
      </div>
    </div>
  )
}

export default EmptyState
