export interface OpenSourcePR {
  title: string;
  url: string;
  merged: boolean;
}

export interface OpenSourceContrib {
  org: string;
  orgUrl: string;
  prs: OpenSourcePR[];
}

export const OPENSOURCE_DATA: OpenSourceContrib[] = [
  {
    org: "openclaw",
    orgUrl: "https://github.com/openclaw/openclaw",
    prs: [
      {
        title: "fix(cli): auto-reconnect logs --follow on transient gateway disconnect",
        url: "https://github.com/openclaw/openclaw/pull/75059",
        merged: true,
      },
    ],
  },
  {
    org: "nao-labs",
    orgUrl: "https://github.com/getnao/nao",
    prs: [
      {
        title: "fix(sync): strip .git/ from cloned repos to fix gitlink bug",
        url: "https://github.com/getnao/nao/pull/720",
        merged: true,
      },
      {
        title: "fix: format large numbers with K/M/B suffix in KPI cards and tooltips",
        url: "https://github.com/getnao/nao/pull/766",
        merged: true,
      },
    ],
  },
];
