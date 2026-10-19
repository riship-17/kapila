import Link from "next/link";
import { Fragment } from "react";
import type { Crumb } from "@/lib/seo";

type BreadcrumbProps = { crumbs: Crumb[] };

/** Mono trail above a display heading. The last crumb is the current page. */
export function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10 lg:mb-16">
      <ol className="flex flex-wrap gap-x-2 font-mono text-label text-ink-secondary uppercase">
        {crumbs.map((crumb, position) => {
          const current = position === crumbs.length - 1;
          return (
            <Fragment key={crumb.path}>
              {position > 0 && <li aria-hidden>/</li>}
              <li>
                {current ? (
                  <span aria-current="page" className="text-ink">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="decoration-1 underline-offset-4 hover:underline">
                    {crumb.name}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
