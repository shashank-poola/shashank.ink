"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { GitMergeIcon } from "lucide-react";
import Link from "next/link";
import type { OpenSourceContrib } from "@/data/opensource";

interface Props {
  contributions: OpenSourceContrib[];
}

export function OpenSourceContributions({ contributions }: Props) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const totalPRs = contributions.reduce((acc, c) => acc + c.prs.length, 0);

  const toggle = (org: string) =>
    setExpanded(prev => ({ ...prev, [org]: !prev[org] }));

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Open Source</h2>
      </div>

      <div className="space-y-0">
        {contributions.map((contrib) => (
          <div key={contrib.org}>
            <button
              onClick={() => toggle(contrib.org)}
              className="w-full flex items-center justify-between py-2.5 hover:opacity-70 transition-opacity text-left"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-semibold text-base">{contrib.org}</span>
                <span className="text-xs text-muted-foreground">
                  {contrib.prs.length} PR{contrib.prs.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="rounded-full border border-border p-0.5">
                <ChevronDownIcon
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                    expanded[contrib.org] ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {expanded[contrib.org] && (
              <div className="pl-4 pb-2 space-y-1">
                {contrib.prs.map((pr, j) => (
                  <Link
                    key={j}
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <GitMergeIcon className="h-3.5 w-3.5 shrink-0 mt-0.5 text-muted-foreground" />
                    <span className="underline underline-offset-2">{pr.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
