import type { ReactNode } from "react";

/** Remounts on every navigation, replaying a 200ms fade. Pure CSS, so first paint never waits on JS. */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-fade">{children}</div>;
}
