import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  children: ReactNode;
}

export default function LegalPageLayout({ children }: LegalPageLayoutProps) {
  return (
    <article className="[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-axiforma [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-axiforma [&_h3]:font-semibold [&_p]:text-muted-foreground [&_p]:mb-4 [&_ul]:my-4 [&_li]:text-muted-foreground [&_li]:mb-1 [&_a]:text-primary [&_a]:hover:underline">
      {children}
    </article>
  );
}
