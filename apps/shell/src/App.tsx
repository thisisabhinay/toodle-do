import * as React from "react"
import Button from '@repo/ui/button';

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-red-500">
        Hello, React with Webpack, TypeScript, and JavaScript!
      </h1>
      <Button className="cursor-pointer" appName="Example">Click</Button>
    </div>
  )
}

export default App
