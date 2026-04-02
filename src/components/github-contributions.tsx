"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface GitHubContributionsProps {
  username: string;
}

export default function GitHubContributions({
  username,
}: GitHubContributionsProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <GitHubCalendar
        username={username}
        blockSize={10}
        blockMargin={3.96}
        colorScheme={theme === "dark" ? "dark" : "light"}
        fontSize={12}
        style={{
          width: "100%",
          minHeight: "150px",
        }}
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
      />
    </div>
  );
}
