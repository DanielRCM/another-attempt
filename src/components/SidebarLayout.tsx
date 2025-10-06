import { ReactNode } from "react";
import TableOfContents from "./TableOfContents";

export interface TOCItem {
  id: string;
  label: string;
}

interface SidebarLayoutProps {
  children: ReactNode;
  tocItems: TOCItem[];
  rightSidebar?: ReactNode;
}

const SidebarLayout = ({ children, tocItems, rightSidebar }: SidebarLayoutProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-0">
      {/* Left sidebar - Table of Contents */}
      <aside className="hidden lg:block">
        <div className="sticky top-20 h-fit">
          <TableOfContents items={tocItems} />
        </div>
      </aside>
      
      {/* Center content */}
      <div className="max-w-3xl mx-auto px-6 w-full">
        {children}
      </div>
      
      {/* Right sidebar - Cross links or empty spacer */}
      <aside className="hidden lg:block bg-sidebar">
        {rightSidebar && (
          <div className="sticky top-20 h-fit p-6">
            {rightSidebar}
          </div>
        )}
      </aside>
    </div>
  );
};

export default SidebarLayout;
