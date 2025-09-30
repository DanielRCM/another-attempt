import { ReactNode } from "react";
import TableOfContents from "./TableOfContents";

export interface TOCItem {
  id: string;
  label: string;
}

interface SidebarLayoutProps {
  children: ReactNode;
  tocItems: TOCItem[];
}

const SidebarLayout = ({ children, tocItems }: SidebarLayoutProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-0">
      {/* Left sidebar - Table of Contents */}
      <aside className="hidden lg:block">
        <div className="sticky top-20 h-fit">
          <TableOfContents items={tocItems} />
        </div>
      </aside>
      
      {/* Center content */}
      <div className="max-w-4xl mx-auto px-6 w-full">
        {children}
      </div>
      
      {/* Right sidebar - Empty spacer for symmetry */}
      <aside className="hidden lg:block bg-sidebar" />
    </div>
  );
};

export default SidebarLayout;
