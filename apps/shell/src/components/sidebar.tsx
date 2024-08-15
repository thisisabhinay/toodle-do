import { Button } from "@repo/ui/components";
import React from "react";
import { Link } from "react-router-dom";

export type SidebarItem = {
  href: string,
  key: string,
  label: string,
  icon?: any
}

export interface SidebarProps {
  list: SidebarItem[]
}

const Sidebar: React.FC<SidebarProps> = ({ list }) => {
  return (
    <aside id="SidebarProps" className="grid grid-cols-1 auto-rows-max gap-1">
      {list.map((item) => (
        <Button
          key={item.key}
          variant="ghost"
          className="!justify-start"
          asChild
        >
          <Link to={item.key}>
            {item.icon} {item.label}
          </Link>
        </Button>
      ))}
    </aside>
  )
}

export default Sidebar;