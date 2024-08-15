import React, { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import sidebarList from "../config/sidebar"
import Sidebar from "./sidebar"

const DashboardApp = lazy(() => import("dashboard/DashboardIndex"))

const ShellApp: React.FC = () => {
  return (
    <div
      id="ShellApp"
      className="grid grid-cols-[18rem_1fr] auto-rows-auto h-screen gap-0"
    >
      <div className="py-10 px-4 bg-slate-50">
        <Sidebar list={sidebarList} />
      </div>

      <div className="p-10">
        <Routes>
          <Route path="/" element={<DashboardApp />} />
          <Route path="/inbox/*" element={<div>Inbox</div>} />
          <Route path="/goals/*" element={<div>Goals</div>} />
          <Route path="/milestones/*" element={<div>Milestones</div>} />
          <Route path="/projects/*" element={<div>Projects</div>} />
          <Route path="/tags/*" element={<div>Tags</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default ShellApp