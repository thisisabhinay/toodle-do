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
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};

export default Button