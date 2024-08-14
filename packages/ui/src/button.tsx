// eslint-disable-next-line no-redeclare
import * as React from "react"

interface ButtonProps {
  children: React.ReactNode
  className?: string
  appName: string
}

const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={`ui-text-white ui-bg-blue-600 hover:ui-bg-blue-800 focus:ui-ring-4 focus:ui-ring-blue-300 ui-font-medium ui-rounded-lg ui-text-sm ui-px-5 ui-py-2.5 ui-me-2 ui-mb-2 dark:ui-bg-blue-600 dark:hover:bg-blue-700 focus:ui-outline-none dark:focus:ring-blue-800 ${className}`}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  )
};

export default Button