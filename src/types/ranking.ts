export interface Student {
  rank: number;
  name: string;
  group: string;
  avgGrade: number;
  trend: "↑" | "↓" | "→";
}

export interface GroupStat {
  group: string;
  avgGrade: number;
  students: number;
  rank: number;
}

export interface PerformanceStat {
  label: string;
  percentage: number;
  color: string;
}
