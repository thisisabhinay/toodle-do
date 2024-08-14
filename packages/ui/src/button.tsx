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
      className={`text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${className}`}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  )
};

export default Button