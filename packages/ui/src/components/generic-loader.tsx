import { Loader2 } from "lucide-react";
import React from 'react';


interface GenericLoaderProps {}

const GenericLoader: React.FC<GenericLoaderProps> = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center gap-2">
      <Loader2 className="mr-2 size-6 animate-spin" />
      <div className="text-xs text-slate-500">Loading...</div>
    </div>
  )
}

export default GenericLoader;
