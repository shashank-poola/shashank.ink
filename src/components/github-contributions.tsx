"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

interface GitHubContributionsProps {
  username: string;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  count: number;
  date: string;
}

export default function GitHubContributions({
  username,
}: GitHubContributionsProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    count: 0,
    date: "",
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
    );
  }

  return (
    <div ref={containerRef} className="w-full relative">
      <GitHubCalendar
        username={username}
        blockSize={9.5}
        blockMargin={4}
        colorScheme={theme === "dark" ? "dark" : "light"}
        fontSize={12}
        style={{ width: "100%" }}
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
        renderBlock={(block, activity) => (
          <g
            onMouseEnter={(e) => {
              const rect = containerRef.current?.getBoundingClientRect();
              if (!rect) return;
              setTooltip({
                visible: true,
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                count: activity.count,
                date: activity.date,
              });
            }}
            onMouseMove={(e) => {
              const rect = containerRef.current?.getBoundingClientRect();
              if (!rect) return;
              setTooltip((prev) => ({
                ...prev,
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              }));
            }}
            onMouseLeave={() =>
              setTooltip((prev) => ({ ...prev, visible: false }))
            }
            style={{ cursor: "pointer" }}
          >
            {block}
          </g>
        )}
      />

      {tooltip.visible && (
        <div
          className="pointer-events-none absolute z-50 rounded-md bg-gray-900 dark:bg-gray-800 text-white text-xs px-2.5 py-1.5 whitespace-nowrap shadow-lg border border-gray-700"
          style={{
            top: tooltip.y - 40,
            left: Math.max(
              0,
              Math.min(
                tooltip.x - 80,
                (containerRef.current?.clientWidth ?? 400) - 240
              )
            ),
          }}
        >
          {tooltip.count === 0
            ? "No contributions"
            : `${tooltip.count} contribution${tooltip.count !== 1 ? "s" : ""}`}{" "}
          on {tooltip.date}
        </div>
      )}
    </div>
  );
}
