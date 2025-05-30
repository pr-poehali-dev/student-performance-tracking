import React from "react";
import { PerformanceStat } from "@/types/ranking";

const PerformanceStats: React.FC = () => {
  const stats: PerformanceStat[] = [
    { label: "Отличники", percentage: 18, color: "green" },
    { label: "Хорошисты", percentage: 45, color: "blue" },
    { label: "Троечники", percentage: 32, color: "yellow" },
    { label: "Должники", percentage: 5, color: "red" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`text-center p-4 bg-${stat.color}-50 rounded-lg`}
        >
          <div className={`text-2xl font-bold text-${stat.color}-600`}>
            {stat.percentage}%
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceStats;
