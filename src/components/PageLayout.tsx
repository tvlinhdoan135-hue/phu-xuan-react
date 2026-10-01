import type { ReactNode } from "react";

interface PageLayoutProps {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
}

function PageLayout({
  header,
  main,
  footer,
}: PageLayoutProps) {
  return (
    <div className="page-layout">
      <header>{header}</header>

      <main>{main}</main>

      <footer>{footer}</footer>
    </div>
  );
}

export default PageLayout;