import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RankingDisplay = () => {
  const topStudents = [
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

  const groupStats = [
    { group: "ИС-21-1", avgGrade: 4.4, students: 25, rank: 1 },
    { group: "ИС-21-2", avgGrade: 4.1, students: 23, rank: 2 },
    { group: "ИС-21-3", avgGrade: 3.8, students: 24, rank: 3 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return "🏅";
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "↑":
        return "text-green-500";
      case "↓":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Топ студентов */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            🏆 Рейтинг студентов
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topStudents.map((student) => (
              <div
                key={student.rank}
                className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                  student.rank <= 3
                    ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">
                      {getRankIcon(student.rank)}
                    </span>
                    <span className="text-lg font-bold text-gray-600">
                      #{student.rank}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {student.name}
                    </p>
                    <p className="text-sm text-gray-600">{student.group}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-bold text-violet-600">
                    {student.avgGrade}
                  </span>
                  <span className={`text-xl ${getTrendColor(student.trend)}`}>
                    {student.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Рейтинг групп */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            👥 Рейтинг групп
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {groupStats.map((group) => (
              <div
                key={group.group}
                className={`p-6 rounded-lg border-2 text-center transition-all hover:shadow-lg ${
                  group.rank === 1
                    ? "bg-gradient-to-b from-yellow-50 to-yellow-100 border-yellow-300"
                    : group.rank === 2
                      ? "bg-gradient-to-b from-gray-50 to-gray-100 border-gray-300"
                      : "bg-gradient-to-b from-orange-50 to-orange-100 border-orange-300"
                }`}
              >
                <div className="text-3xl mb-2">{getRankIcon(group.rank)}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {group.group}
                </h3>
                <p className="text-2xl font-bold text-violet-600 mb-2">
                  {group.avgGrade}
                </p>
                <p className="text-sm text-gray-600">
                  {group.students} студентов
                </p>
                <div
                  className={`mt-3 px-3 py-1 rounded-full text-xs font-medium inline-block ${
                    group.rank === 1
                      ? "bg-green-100 text-green-800"
                      : group.rank === 2
                        ? "bg-blue-100 text-blue-800"
                        : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {group.rank} место
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Статистика успеваемости */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            📊 Статистика успеваемости
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">18%</div>
              <div className="text-sm text-gray-600">Отличники</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">45%</div>
              <div className="text-sm text-gray-600">Хорошисты</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">32%</div>
              <div className="text-sm text-gray-600">Троечники</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">5%</div>
              <div className="text-sm text-gray-600">Должники</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingDisplay;
