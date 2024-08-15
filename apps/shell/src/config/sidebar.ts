import {
  FolderGit2,
  Goal,
  Inbox,
  LayoutDashboard,
  Milestone,
  Tags
} from "@repo/ui/icons"
import React from "react"
import { SidebarItem } from "../components/sidebar"

const sidebarList: SidebarItem[] = [
  {
    href: "/",
    key: "/",
    label: "Dashboard",
    icon: React.createElement(LayoutDashboard, { className: "mr-2 size-4" })
  },
  {
    href: "/inbox",
    key: "inbox",
    label: "Inbox",
    icon: React.createElement(Inbox, { className: "mr-2 size-4" })
  },
  {
    href: "/goals",
    key: "goals",
    label: "Goals",
    icon: React.createElement(Goal, { className: "mr-2 size-4" })
  },
  {
    href: "/milestones",
    key: "milestones",
    label: "Milestones",
    icon: React.createElement(Milestone, { className: "mr-2 size-4" })
  },
  {
    href: "/projects",
    key: "projects",
    label: "Projects",
    icon: React.createElement(FolderGit2, { className: "mr-2 size-4" })
  },
  {
    href: "/tags",
    key: "tags",
    label: "Tags",
    icon: React.createElement(Tags, { className: "mr-2 size-4" })
  }
]

export default sidebarList
