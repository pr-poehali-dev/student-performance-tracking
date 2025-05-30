import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Student, GroupStat } from "@/types/ranking";
import StudentRankingCard from "@/components/ranking/StudentRankingCard";
import GroupRankingCard from "@/components/ranking/GroupRankingCard";
import PerformanceStats from "@/components/ranking/PerformanceStats";

const RankingDisplay = () => {
  const topStudents: Student[] = [
    {
      rank: 1,
      name: "Смирнов Д.А.",
      group: "ИС-21-1",
      avgGrade: 4.9,
      trend: "↑",
    },
    {
      rank: 2,
      name: "Иванов А.И.",
      group: "ИС-21-1",
      avgGrade: 4.8,
      trend: "→",
    },
    {
      rank: 3,
      name: "Козлова Е.Н.",
      group: "ИС-21-2",
      avgGrade: 4.5,
      trend: "↑",
    },
    {
      rank: 4,
      name: "Петрова М.С.",
      group: "ИС-21-1",
      avgGrade: 4.2,
      trend: "↓",
    },
    {
      rank: 5,
      name: "Морозова А.В.",
      group: "ИС-21-3",
      avgGrade: 3.9,
      trend: "↑",
    },
  ];

  const groupStats: GroupStat[] = [
    { group: "ИС-21-1", avgGrade: 4.4, students: 25, rank: 1 },
    { group: "ИС-21-2", avgGrade: 4.1, students: 23, rank: 2 },
    { group: "ИС-21-3", avgGrade: 3.8, students: 24, rank: 3 },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            🏆 Рейтинг студентов
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topStudents.map((student) => (
              <StudentRankingCard key={student.rank} student={student} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            👥 Рейтинг групп
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {groupStats.map((group) => (
              <GroupRankingCard key={group.group} group={group} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            📊 Статистика успеваемости
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PerformanceStats />
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingDisplay;
